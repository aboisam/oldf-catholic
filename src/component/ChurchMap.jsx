import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import "leaflet-control-geocoder";
import React, { useEffect, useState } from "react";
import {
    MapContainer,
    TileLayer,
    Marker,
    Popup,
    useMap
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Custom marker
const customIcon = new L.Icon({
    iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
    shadowSize: [41, 41]
});

// Locate Me button (focuses only on OLDF Karomagiji)
const LocateMeButton = ({ churchPosition }) => {
    const map = useMap();

    const handleLocate = () => {
        map.flyTo(churchPosition, 16);
        L.marker(churchPosition, { icon: customIcon, title: "church" })
            .addTo(map)
            .bindPopup("Our Lady of Fatima Catholic Church, Karomagiji")
            .openPopup();
    };

    return (
        <button
            onClick={handleLocate}
            className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-lg shadow-md hover:bg-blue-700 z-[1000]"
        >
            Locate Me
        </button>
    );
};

// Style switcher
const MapStyleSwitcher = ({ setStyle }) => (
    <div className="absolute top-4 left-4 bg-white rounded-lg shadow-md p-2 space-x-2 z-[1000]">
        <button
            onClick={() => setStyle("m")}
            className="px-2 py-1 text-sm bg-gray-200 rounded hover:bg-gray-300"
        >
            Normal
        </button>
        <button
            onClick={() => setStyle("s")}
            className="px-2 py-1 text-sm bg-gray-200 rounded hover:bg-gray-300"
        >
            Satellite
        </button>
        <button
            onClick={() => setStyle("p")}
            className="px-2 py-1 text-sm bg-gray-200 rounded hover:bg-gray-300"
        >
            Terrain
        </button>
    </div>
);

// Search box control
const SearchControl = () => {
    const map = useMap();

    useEffect(() => {
        const control = L.Control.geocoder({
            defaultMarkGeocode: false
        })
            .on("markgeocode", (e) => {
                const bbox = e.geocode.bbox;
                const poly = L.polygon([
                    bbox.getSouthEast(),
                    bbox.getNorthEast(),
                    bbox.getNorthWest(),
                    bbox.getSouthWest()
                ]);
                map.fitBounds(poly.getBounds());
                L.marker(e.geocode.center, { icon: customIcon })
                    .addTo(map)
                    .bindPopup(e.geocode.name)
                    .openPopup();
            })
            .addTo(map);

        return () => map.removeControl(control);
    }, [map]);

    return null;
};

const ChurchMap = () => {
    const position = [8.9917, 7.4236]; // OLDF Karomagiji
    const [mapStyle, setMapStyle] = useState("m");

    // Nearby parishes (excluding OLDF so it only appears when button is clicked)
    const parishes = [
        {
            name: "SS Peter and Paul Catholic Church, Nyanya",
            coords: [9.006, 7.55]
        },
        {
            name: "St. Luke Catholic Church, Kubwa",
            coords: [9.167, 7.365]
        },
        {
            name: "Holy Cross Catholic Church, Garki",
            coords: [9.033, 7.483]
        }
    ];

    return (
        <div className="relative w-full h-[50vh] md:h-[400px] rounded-2xl overflow-hidden shadow-md">
            <MapContainer
                center={position}
                zoom={13}
                minZoom={2}
                maxZoom={20}
                scrollWheelZoom={true}
                zoomControl={true}
                style={{ height: "100%", width: "100%" }}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.google.com/maps">Google Maps</a>'
                    url={`http://mt1.google.com/vt/lyrs=${mapStyle}&x={x}&y={y}&z={z}`}
                />

                {/* Other parish markers */}
                {parishes.map((parish, i) => (
                    <Marker key={i} position={parish.coords} icon={customIcon}>
                        <Popup>{parish.name}</Popup>
                    </Marker>
                ))}

                <LocateMeButton churchPosition={position} />
                <MapStyleSwitcher setStyle={setMapStyle} />
                <SearchControl />
            </MapContainer>

            {/* Google Maps Directions */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                <a
                    href="https://www.google.com/maps/dir/?api=1&destination=8.9917,7.4236"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-700"
                >
                    Get Directions
                </a>
            </div>
        </div>
    );
};

export default ChurchMap;
