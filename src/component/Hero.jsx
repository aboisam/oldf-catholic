import React from "react";
import { Link } from "react-router-dom";
import bg from "../assets/fatima.jpeg";

const Hero = () => {
  return (
    <div
      className="relative flex flex-col justify-center h-130 bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="absolute inset-0 bg-black/50 z-0" />
      <div className="relative z-10 px-4 sm:px-8 md:px-16">
        <h1 className="text-white font-bold text-4xl sm:text-6xl lg:text-8xl text-left">
          Welcome to Our Lady of Fatima Catholic Church <br /> Karonmagiji
        </h1>
        <p className="text-white font-bold text-base sm:text-xl md:text-2xl mt-6 sm:mt-8">
          We are a welcoming community at Our Lady of Fatima Catholic Church,
          Karonmagiji—growing together in faith, hope, and love. Join us as we
          worship, serve the Lord, and support one another.
        </p>

        {/* ✅ Weekly Activities navigates to /contact */}
        <Link
          to="/contact"
          className="inline-block bg-[#2563eb] px-6 py-3 sm:px-8 sm:py-4 text-white rounded-full mt-6 sm:mt-8 font-semibold text-base sm:text-xl hover:bg-blue-700 transition-colors"
        >
          Weekly Activities
        </Link>
      </div>
    </div>
  );
};

export default Hero;
