import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const stats = [
  {
    id: 1,
    number: 250,
    letter: "+",
    description: "We had a professional & Experienced staff ready to help you anytime",
  },
  {
    id: 2,
    number: 14,
    letter: "m",
    description: "Good customer service turns one-time off clients into long-term",
  },
  {
    id: 3,
    number: 460,
    letter: "+",
    description: "Proving all type of brand solutions every small and big car services",
  },
  {
    id: 4,
    number: 30,
    letter: "k",
    description: "We hold a successful track record form our satisfying our customers",
  },
];

const Counter = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.4,
  });

  return (
    <div ref={ref} className="py-20 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center max-w-7xl mx-auto px-4">
        {stats.map((stat) => (
          <div key={stat.id}>
            <h2 className="text-7xl md:text-8xl font-bold flex justify-center items-baseline">
              {inView ? (
                <CountUp
                  key={`${stat.id}-${inView}`}
                  end={stat.number}
                  duration={2}
                />
              ) : (
                0
              )}
              <span className="ml-1 text-7xl md:text-8xl text-[#f7931e]">
                {stat.letter}
              </span>
            </h2>
            <p className="mt-4 text-gray-700 text-sm max-w-xs mx-auto text-left">
              {stat.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Counter;
