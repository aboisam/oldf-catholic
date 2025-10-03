import React from 'react'

const ParishAnnocement = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-blue-100">
            <div className="p-8 max-w-2xl w-full bg-white rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold mb-6 text-center">Parish Announcements</h1>
                <ul className="space-y-4 mb-6 text-center">
                    <li>
                        <strong className="font-semibold">Sunday Mass:</strong> Every Sunday at 6:00 AM and 8:00 AM.
                    </li>
                    <li>
                        <strong className="font-semibold">Bible Study:</strong> Wednesdays at 6:00 PM in the parish hall.
                    </li>
                    <li>
                        <strong className="font-semibold">Youth Group Meeting:</strong> Fridays at 5:00 PM.
                    </li>
                    <li>
                        <strong className="font-semibold">Upcoming Event:</strong> Parish Picnic on July 15th, 2024. All are welcome!
                    </li>
                    <li>
                        <strong className="font-semibold">Volunteers Needed:</strong> Please sign up at the church office to help with community outreach.
                    </li>
                </ul>
                <p className="text-center text-gray-600">
                    For more information, contact the parish office or visit our website.
                </p>
            </div>
        </div >
    )
}

export default ParishAnnocement
