// src/components/EventsBox.jsx
import React from 'react'

const events = [
    { date: 'September 28, 2025', title: 'Abuja Bishop visits the church', type: 'upcoming' },
    { date: 'November 20, 2025', title: 'Harvest and Bazaar will take place', type: 'upcoming' },
    { date: 'July 15, 2025', title: 'Youth Conference', type: 'past' },
    { date: 'May 5, 2025', title: 'Choir Anniversary', type: 'past' },
]

const EventsBox = () => {
    const upcomingEvents = events.filter(e => e.type === 'upcoming')
    const pastEvents = events.filter(e => e.type === 'past')

    return (
        <div>
            <h1 className="text-2xl font-bold mb-6">Events</h1>

            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h2 className="text-xl font-semibold mb-4">Upcoming Events</h2>
                <ul className="list-disc pl-5 space-y-2">
                    {upcomingEvents.map((event, index) => (
                        <li key={index}>
                            <span className="font-medium">{event.date}:</span> {event.title}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold mb-4">Past Events</h2>
                <ul className="list-disc pl-5 space-y-2">
                    {pastEvents.map((event, index) => (
                        <li key={index}>
                            <span className="font-medium">{event.date}:</span> {event.title}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default EventsBox
