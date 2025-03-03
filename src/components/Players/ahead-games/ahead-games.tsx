import React from "react";
import { GetAheadOfTheGameData } from "@/lib/types";

interface AheadGamesProps {
  data: GetAheadOfTheGameData;
}

const AheadGames: React.FC<AheadGamesProps> = ({ data }) => {
  return (
    <div className="mb-10">
      <h1 className="text-3xl font-bold mb-6">{data.title}</h1>

      <div className="space-y-6">
        {data.moduleCollection.items.map((item: any, i: number) => (
          <div
            key={i}
            className="flex flex-col md:flex-row items-center md:items-stretch bg-white shadow-lg rounded-lg p-6 gap-6 w-full max-w-4xl mx-auto h-[300px]"
          >
            {/* Left Side: Content Box */}
            <div className="flex-1 h-full flex flex-col justify-center text-left">
              <p className="text-sm text-gray-500">{item.headingTop}</p>
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p className="text-gray-700">{item.description}</p>
            </div>

            {/* Right Side: Image Box */}
            <div className="w-full md:w-[300px] h-[250px] flex-shrink-0">
              <img
                src={item.image.url}
                alt="Thumbnail"
                className="w-full h-full object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AheadGames;
