// src/pages/News.jsx
import React from "react";
import Hero from "../component/Hero";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Animation variants
const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.3,
            duration: 0.8,
            ease: "easeOut",
        },
    }),
};

const NewsCard = ({ title, location, content, image, date, link, index }) => (
    <motion.div
        custom={index}
        initial="hidden"
        animate="visible"
        variants={cardVariants}
    >
        <Link
            to={link}
            className="block p-4 my-4 rounded-2xl shadow-md bg-white hover:shadow-lg transition-shadow duration-200 flex flex-col md:flex-row gap-4"
        >
            {image && (
                <img
                    src={image}
                    alt={title || "News image"}
                    className="w-full md:w-48 h-32 object-cover rounded-xl flex-shrink-0"
                />
            )}

            <div className="flex-1 overflow-hidden">
                {/* Scrolling ticker for title */}
                <div className="overflow-hidden whitespace-nowrap">
                    <motion.h2
                        className="text-xl font-bold mb-1 inline-block"
                        animate={{ x: ["100%", "-100%"] }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    >
                        {title}
                    </motion.h2>
                </div>

                <p className="text-sm text-gray-500">
                    {location} • {date}
                </p>
                <p className="text-base text-gray-700 mt-2 line-clamp-3">{content}</p>
            </div>
        </Link>
    </motion.div>
);

const News = () => {
    const updates = [
        {
            title: "OLDF Catholic Church Karomagiji",
            location: "Karomagiji, Abuja",
            date: "September 10, 2025",
            content:
                "The parish community continues to grow with new youth outreach programs and preparations for the upcoming Harvest celebration. Parishioners are encouraged to participate actively in the ongoing catechism classes and community development projects.",
            image: "/images/oldf-karomagiji.jpg",
            link: "/news/oldf-karomagiji",
        },
        {
            title: "Archdiocese of Abuja",
            location: "Abuja City",
            date: "September 12, 2025",
            content:
                "The Archdiocese has announced a new pastoral initiative aimed at strengthening family life and promoting unity among parishes. Archbishop Kaigama also emphasized the importance of social responsibility and care for the poor during the diocesan meeting.",
            image: "/images/archdiocese-abuja.jpg",
            link: "/news/archdiocese-abuja",
        },
    ];

    return (
        <div className="p-6">
            <Hero />

            {/* Scrolling main heading */}
            <div className="overflow-hidden whitespace-nowrap">
                <motion.h1
                    className="text-2xl font-bold my-4 inline-block"
                    animate={{ x: ["100%", "-100%"] }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                >
                    Latest News Updates
                </motion.h1>
            </div>

            {/* News Cards */}
            {updates.map((news, index) => (
                <NewsCard key={index} index={index} {...news} />
            ))}
        </div>
    );
};

export default News;
