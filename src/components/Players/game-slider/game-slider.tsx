import React from "react";
import { GameSliderPlayersData } from "@/lib/types";

interface GameSliderProps {
  data: GameSliderPlayersData;
}

const GameSlider: React.FC<GameSliderProps> = ({ data }) => {
  return (
    <div className="text-center mb-10">
      <h1 className="text-2xl font-bold">{data.heading}</h1>
      <h2 className="text-lg text-gray-600">{data.description}</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6 max-w-5xl mx-auto">
        {data?.mediaCollection?.items?.map((item, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className="w-64 h-64 relative">
              <img
                src={item.img.url}
                alt="Thumbnail"
                className="w-full h-full object-cover rounded-lg shadow-md"
              />
            </div>
            <p className="mt-3 text-lg font-semibold text-gray-800">
              {item.title}
            </p>
          </div>
        ))}
      </div>

      <p>{data.subDescription}</p>
    </div>
  );
};

export default GameSlider;
