"use client";
import React from "react";
import { GameSliderData } from "@/lib/types";
import GameSliderSchema from "./GameSliderSchema";

interface gameSliderProps {
  data: GameSliderData;
}

const GameSlider: React.FC<gameSliderProps> = ({ data }) => {
  const media = data.mediaCollection.items;
  return (
    <div className="py-8 bg-black text-center">
      {/* GameSlider schema */}
      <GameSliderSchema data={data} />

      <div className="mb-8">
        <h2 className="text-white">{data.heading}</h2>
        <p className="text-white">{data.description}</p>
      </div>
      <div className="grid grid-cols-3 gap-4 max-w-5xl mx-auto">
        {media.map((item, index) => (
          <div key={index} className="w-64">
            <div className="relative h-40 overflow-hidden rounded-lg group">
              {/* Image (Visible by default) */}
              <img
                src={item.img.url}
                alt="Thumbnail"
                className="w-full h-full object-cover transition-all duration-500 group-hover:opacity-0 group-hover:scale-105"
              />

              {/* Video (Hidden by default, shown on hover) */}

              <video
                className="absolute top-0 left-0 w-full h-full object-cover opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:scale-105"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src={item.video.url} type="video/mp4" />
              </video>
            </div>

            {/* Text (Always Below) */}
            <p className="mt-2 text-white text-sm font-semibold">
              {item.title}
            </p>

            <p className="text-gray-300 text-xs">{item.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameSlider;
