import React from "react";
import { PlayersLoveSkillzData } from "@/lib/types";

interface PlayersLoveSkillzrops {
  data: PlayersLoveSkillzData;
}

const PlayersLoveSkillz: React.FC<PlayersLoveSkillzrops> = ({ data }) => {
  return (
    <div className="text-center p-6 mb-10">
      <h1 className="text-3xl font-bold mb-6">{data.title}</h1>

      <div className="flex flex-wrap justify-center gap-6">
        {data.modulesCollection.items.map((item: any, index: number) => {
          return (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl p-4 w-80 flex flex-col items-center text-center"
            >
              <img
                src={item.img.url}
                alt="Thumbnail"
                className="w-[70px] h-[70px] object-cover rounded-lg"
              />
              <h3 className="text-xl font-semibold mt-4">{item.title}</h3>
              <p className="text-gray-600 mt-2">{item.subtitle}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PlayersLoveSkillz;
