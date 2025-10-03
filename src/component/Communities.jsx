import React from 'react'
import Rev from '../assets/rev.jpeg'
import Rev2 from '../assets/rev.jpeg'
import catechist from '../assets/rev.jpeg'
import catechist2 from '../assets/rev.jpeg'

const Communities = () => {
    const communities = [
        {
            img: Rev,
            alt: "emmanuel",
            title: "Igbo Community",
            role: "Parish Priest"
        },
        {
            img: Rev2,
            alt: "Assistant",
            title: "Arewa Community",
            role: "Assistant Parish Priest"
        },
        {
            img: catechist,
            alt: "Emmanuel",
            title: "Yoruba Community",
            role: "Parish Catechist"
        },
        {
            img: catechist,
            alt: "Emmanuel",
            title: "Edo Community",
            role: "Parish Catechist"
        },
        {
            img: catechist,
            alt: "Emmanuel",
            title: "Tiv Community",
            role: "Parish Catechist"
        },
        {
            img: catechist,
            alt: "Emmanuel",
            title: "Idoma Community",
            role: "Parish Catechist"
        },
        {
            img: catechist2,
            alt: "Andrew",
            title: "Igala Community",
            role: "Assistant Catechist"
        },
        {
            img: catechist2,
            alt: "Andrew",
            title: "Igala Community",
            role: "Assistant Catechist"
        }
    ];

    return (
        <section className="bg-sky-50 py-10 px-4">
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                {communities.map((community, idx) => (
                    <div key={idx} className="priesthood flex flex-col items-center bg-white rounded-xl p-6 shadow">
                        <img
                            src={community.img}
                            alt={community.alt}
                            className="w-50 h-50 object-cover rounded-full mb-4 border-4 border-blue-200"
                        />
                        <h1 className="text-lg font-bold">{community.title}</h1>
                        <span className="text-gray-600">{community.role}</span>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Communities
