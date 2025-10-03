import React from 'react'
import mary from '../assets/mothermary.jpeg'

const Socienties = () => {
    // Example data for societies
    const societies = [
        {
            name: "Legion of Mary",
            image: mary,
            link: "https://wa.me/2347039257854"
        },
        {
            name: "Catholic Women's Organization (CWO)",
            image: "/images/cwo.jpg",
            link: "https://example.com/cwo"
        },
        {
            name: "Catholic Men's Organization (CMO)",
            image: "/images/cmo.jpg",
            link: "https://example.com/cmo"
        },
        {
            name: "St. Vincent de Paul Society",
            image: "/images/st_vincent.jpg",
            link: "https://example.com/st-vincent"
        },
        {
            name: "Charismatic Renewal",
            image: "/images/charismatic.jpg",
            link: "https://example.com/charismatic"
        },
        {
            name: "Youth Fellowship",
            image: "/images/youth_fellowship.jpg",
            link: "https://example.com/youth-fellowship"
        },
        {
            name: "Choir",
            image: "/images/choir.jpg",
            link: "https://example.com/choir"
        },
        {
            name: "Block Rosary",
            image: "/images/block_rosary.jpg",
            link: "https://example.com/block-rosary"
        },
        {
            name: "Altar Servers",
            image: "/images/altar_servers.jpg",
            link: "https://example.com/altar-servers"
        }
    ];

    return (
        <section>
            <h2 className="text-xl font-bold text-center mt-5 mb-5">
                SOCIETIES AND ORGANIZATIONS
            </h2>
            <div className="flex flex-wrap gap-6 justify-center">
                {societies.map((society, idx) => (
                    <a
                        key={idx}
                        href={society.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-center no-underline text-inherit w-36"
                    >
                        <img
                            src={society.image}
                            alt={society.name}
                            className="w-full h-[250px] object-cover rounded-lg mb-2 mt-5"
                        />
                        <div>{society.name}</div>
                    </a>
                ))}
            </div>
        </section>
    )
}

export default Socienties
