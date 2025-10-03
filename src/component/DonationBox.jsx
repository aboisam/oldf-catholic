import React from "react";
import { FaCreditCard, FaUniversity, FaMobileAlt, FaPaypal } from "react-icons/fa";

const Donation = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-12 px-6 md:px-20">
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8 md:p-12">
                <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6">
                    Support Our Church Activities
                </h1>
                <p className="text-gray-600 text-center mb-10">
                    Your generous donation helps sustain Our Lady of Fatima Catholic Church, Karomagiji,
                    and supports evangelism, charity works, youth programs, and church maintenance.
                    Every contribution counts!
                </p>

                {/* Bank Transfer */}
                <div className="mb-8">
                    <h2 className="flex items-center text-xl font-semibold text-gray-800 mb-3">
                        <FaUniversity className="mr-2 text-blue-600" /> Bank Transfer
                    </h2>
                    <p className="text-gray-600">Account Name: Our Lady of Fatima Catholic Church, Karomagiji</p>
                    <p className="text-gray-600">Bank: First Bank Nigeria</p>
                    <p className="text-gray-600">Account Number: <span className="font-bold">1234567890</span></p>
                </div>

                {/* Mobile Money / USSD */}
                <div className="mb-8">
                    <h2 className="flex items-center text-xl font-semibold text-gray-800 mb-3">
                        <FaMobileAlt className="mr-2 text-green-600" /> Mobile Transfer / USSD
                    </h2>
                    <p className="text-gray-600">Dial: <span className="font-bold">*737*Amount*1234567890#</span> (GTBank)</p>
                    <p className="text-gray-600">Reference: OLFC Donation</p>
                </div>

                {/* Online Payment */}
                <div className="mb-8">
                    <h2 className="flex items-center text-xl font-semibold text-gray-800 mb-3">
                        <FaCreditCard className="mr-2 text-orange-600" /> Online Payment
                    </h2>
                    <a
                        href="https://paystack.com/pay/olfc-donation"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-[#f7931e] text-white px-6 py-3 rounded-full shadow-md hover:bg-[#e68312] transition"
                    >
                        Donate Securely via Paystack
                    </a>
                </div>

                {/* PayPal (optional for diaspora members) */}
                <div className="mb-8">
                    <h2 className="flex items-center text-xl font-semibold text-gray-800 mb-3">
                        <FaPaypal className="mr-2 text-blue-500" /> PayPal (For International Supporters)
                    </h2>
                    <a
                        href="https://paypal.me/olfcchurch"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-700 transition"
                    >
                        Donate via PayPal
                    </a>
                </div>

                {/* Closing note */}
                <div className="mt-10 text-center">
                    <p className="text-gray-700 italic">
                        “Give, and it will be given to you. A good measure, pressed down, shaken together
                        and running over, will be poured into your lap.” – Luke 6:38
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Donation;
