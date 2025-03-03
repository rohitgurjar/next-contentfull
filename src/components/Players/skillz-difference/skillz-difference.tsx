import React from "react";
import { skillzDifferenceData } from "@/lib/types";

interface SkillzDifferenceProps {
  data: skillzDifferenceData;
}

const SkillzDifference: React.FC<SkillzDifferenceProps> = ({ data }) => {
  return (
    <div
      className="relative p-5 min-h-screen w-full bg-center bg-cover flex flex-col items-center justify-center text-white"
      style={{ backgroundImage: `url(${data.img.url})` }}
    >
      {/* Overlay for better text contrast */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content Section */}
      <div className="relative z-10 text-center max-w-4xl">
        <h1 className="text-4xl font-bold mb-3">{data.title}</h1>
        <h2 className="text-lg font-light">{data.description}</h2>
      </div>

      {/* Media Collection */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
        {data?.mediaCollection?.items?.map((item, i) => (
          <div
            key={i}
            className="flex flex-col items-center bg-white p-4 rounded-lg shadow-lg"
          >
            <div className="w-64 h-64 relative">
              <img
                src={item.img.url}
                alt={item.title}
                className="w-full h-full object-cover rounded-lg shadow-md"
              />
            </div>
            <p className="mt-3 text-lg font-semibold text-gray-800">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillzDifference;
