import React from "react";
// import { motion } from "framer-motion";
// Optional shadcn/ui components (uncomment if available in your project)
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";

/**
 * OurLadyOfFatimaParishPage
 * Single-file React component (Tailwind CSS assumed)
 * - Default export is a ready-to-use page component
 * - Placeholders for images, map iframe, and contact handler
 * - Uses framer-motion for small entrance animations
 *
 * Usage:
 *  - Drop this file into a React app (Create React App / Vite / Next.js page)
 *  - Ensure Tailwind CSS is configured in the project
 *  - Install framer-motion if you want the animations: `npm i framer-motion`
 *
 * Customization:
 *  - Replace image placeholders with your static assets or CMS links
 *  - Hook the contact form to your email service or backend
 */

const parishData = {
    name: "Our Lady of Fatima Parish, Karomagiji",
    tagline: "A place of prayer, service, and Marian devotion",
    address: "Along Airport Road, Karomagiji, Abuja",
    phone: "+234 800 000 0000",
    email: "info@ourladyfatima-karomagiji.org",
    openingHours: [
        { day: "Sunday", hours: "7:00 AM, 9:00 AM, 11:00 AM" },
        { day: "Weekdays", hours: "6:30 AM (Daily Mass)" },
        { day: "Confession", hours: "Saturdays 4:00 PM - 5:30 PM" },
    ],
    groups: [
        "Legion of Mary",
        "Catholic Women Organization (CWO)",
        "Catholic Men Organization (CMO)",
        "Catholic Youth Organization of Nigeria (CYON)",
        "Choir & Liturgical Ministers",
    ],
};

const Section = ({ title, children }) => (
    <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-3">{title}</h3>
        <div className="prose max-w-none">{children}</div>
    </section>
);

export default function OurLadyOfFatimaParishPage({ data = parishData }) {
    return (
        <div className="min-h-screen bg-gray-50 text-gray-900">
            <header className="bg-white shadow">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        {/* Parish Logo placeholder */}
                        <div className="w-14 h-14 rounded-full bg-slate-200 flex items-center justify-center font-bold">
                            OL
                        </div>
                        <div>
                            <h1 className="text-xl font-bold">{data.name}</h1>
                            <p className="text-sm text-gray-600">{data.tagline}</p>
                        </div>
                    </div>
                    <div className="hidden md:flex items-center gap-6 text-sm text-gray-700">
                        <div>{data.address}</div>
                        <div>•</div>
                        <div>{data.email}</div>
                    </div>
                </div>
            </header>

            <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                {/* Hero */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10 items-start"
                >
                    <div className="lg:col-span-2 bg-white shadow-sm rounded-lg p-6">
                        <h2 className="text-3xl font-extrabold mb-3">Welcome to {data.name}</h2>
                        <p className="text-gray-700 mb-4">
                            {data.name} is a Catholic parish dedicated to the Blessed Virgin Mary under the
                            title <strong>Our Lady of Fatima</strong>. Conveniently located along Airport Road,
                            the parish serves Karomagiji and surrounding neighborhoods with regular worship,
                            sacraments, catechesis, and community outreach.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                            <div className="p-4 border rounded">
                                <h4 className="font-semibold">Mission</h4>
                                <p className="text-sm text-gray-600">To bring Christ to the people through sacraments and service.</p>
                            </div>
                            <div className="p-4 border rounded">
                                <h4 className="font-semibold">Vision</h4>
                                <p className="text-sm text-gray-600">A Christ-centered community inspired by Our Lady of Fatima.</p>
                            </div>
                        </div>
                    </div>

                    {/* Quick contact / info card */}
                    <aside className="bg-white shadow-sm rounded-lg p-6">
                        <h3 className="text-lg font-semibold mb-3">Contact & Visiting</h3>
                        <p className="text-sm text-gray-700 mb-2">{data.address}</p>
                        <p className="text-sm text-gray-700">Phone: {data.phone}</p>
                        <p className="text-sm text-gray-700">Email: {data.email}</p>

                        <div className="mt-4">
                            <h4 className="font-medium">Opening Hours</h4>
                            <ul className="text-sm text-gray-600 mt-2 space-y-1">
                                {data.openingHours.map((h) => (
                                    <li key={h.day}>
                                        <strong>{h.day}:</strong> {h.hours}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="mt-4">
                            <button
                                type="button"
                                className="w-full inline-block text-center py-2 px-3 rounded-md border hover:bg-gray-100"
                                onClick={() => alert('Contact form coming soon — hook this to your backend.')}
                            >
                                Contact Parish Office
                            </button>
                        </div>
                    </aside>
                </motion.div>

                {/* Content sections */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <article className="lg:col-span-2 bg-white p-6 rounded-lg shadow-sm">
                        <Section title="History & Dedication">
                            <p>
                                Our Lady of Fatima Parish was established to meet the pastoral needs of the growing
                                Catholic community in Karomagiji. The parish is dedicated to the Blessed Virgin Mary
                                under the title of Our Lady of Fatima — a devotion rooted in prayer, penance, and
                                reparation. Over the years, the parish has grown in membership and ministries,
                                becoming a focal point for worship and community service.
                            </p>
                        </Section>

                        <Section title="Pastoral & Sacramental Life">
                            <p>
                                The parish offers daily and Sunday Masses, catechesis for children and adults, and
                                preparation for sacraments including Baptism, Confirmation, Matrimony, and the
                                Anointing of the Sick. Confession and Eucharistic Adoration are regularly scheduled
                                to encourage spiritual growth.
                            </p>
                        </Section>

                        <Section title="Parish Organizations & Ministries">
                            <ul className="list-disc pl-6">
                                {data.groups.map((g) => (
                                    <li key={g} className="mb-1">{g}</li>
                                ))}
                            </ul>
                            <p className="mt-3">
                                Ministries actively promote evangelization, liturgical life, family support, and youth development.
                            </p>
                        </Section>

                        <Section title="Community Outreach">
                            <p>
                                The parish runs outreach programs to assist the vulnerable, support education and
                                youth empowerment, and foster social cohesion in the neighborhood. Charity and
                                service are central expressions of the parish's mission.
                            </p>
                        </Section>
                    </article>

                    {/* Right column — image, map, small facts */}
                    <aside className="space-y-6">
                        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                            {/* Replace with an actual photo of the church */}
                            <div className="h-48 bg-slate-100 flex items-center justify-center">Church Image Placeholder</div>
                            <div className="p-4">
                                <h4 className="font-semibold">Parish at a glance</h4>
                                <p className="text-sm text-gray-600 mt-2">A welcoming Catholic community on Airport Road.</p>
                                <ul className="text-sm text-gray-600 mt-3 list-disc pl-5">
                                    <li>Active liturgical life</li>
                                    <li>Multiple weekly Masses</li>
                                    <li>Vibrant youth programs</li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-sm overflow-hidden p-4">
                            <h4 className="font-semibold mb-2">Find Us</h4>
                            {/* Map iframe placeholder — replace src with Google Maps embed link */}
                            <div className="w-full h-40 bg-slate-100 flex items-center justify-center">Map Placeholder (iframe)</div>
                            <p className="text-xs text-gray-500 mt-2">Replace with Google Maps embed or your preferred map widget.</p>
                        </div>

                        <div className="bg-white rounded-lg shadow-sm p-4">
                            <h4 className="font-semibold">Newsletter</h4>
                            <p className="text-sm text-gray-600 mb-3">Subscribe for parish news, events and schedules.</p>
                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    alert('Thanks! We will hook the newsletter to your mailing list service.');
                                }}
                            >
                                <input
                                    aria-label="email"
                                    type="email"
                                    required
                                    placeholder="your email"
                                    className="w-full border rounded px-3 py-2 mb-2"
                                />
                                <button className="w-full py-2 rounded border" type="submit">Subscribe</button>
                            </form>
                        </div>
                    </aside>
                </div>

                {/* Footer contact form */}
                <div className="mt-10 bg-white rounded-lg shadow-sm p-6">
                    <h3 className="text-xl font-semibold mb-3">Contact the Parish Office</h3>
                    <p className="text-sm text-gray-600 mb-4">Use this form to send a message — replace with your backend endpoint.</p>
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            const form = new FormData(e.target);
                            // For production: send to your API endpoint
                            console.log('Contact form submitted', Object.fromEntries(form.entries()));
                            alert('Message received (demo). Connect this form to your backend to store messages.');
                            e.target.reset();
                        }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-4"
                    >
                        <input name="name" required placeholder="Full name" className="border rounded px-3 py-2 md:col-span-1" />
                        <input name="email" type="email" required placeholder="Email" className="border rounded px-3 py-2 md:col-span-1" />
                        <input name="phone" placeholder="Phone" className="border rounded px-3 py-2 md:col-span-1" />
                        <textarea name="message" required placeholder="Message" className="border rounded px-3 py-2 md:col-span-3 h-28"></textarea>
                        <div className="md:col-span-3 text-right">
                            <button type="submit" className="py-2 px-4 rounded border">Send Message</button>
                        </div>
                    </form>
                </div>
            </main>

            <footer className="bg-white border-t">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-sm text-gray-600 flex flex-col md:flex-row justify-between items-center">
                    <div>© {new Date().getFullYear()} {data.name} — All rights reserved.</div>
                    <div className="mt-2 md:mt-0">Designed for parish use • Built with ❤️ and prayer</div>
                </div>
            </footer>
        </div>
    );
}
