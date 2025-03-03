import React from "react";
import { farePlayData } from "@/lib/types";

interface FairPlayProps {
  data: farePlayData;
}

const FairPlay: React.FC<FairPlayProps> = ({ data }) => {
  return (
    <div className="flex justify-between items-center max-w-5xl mx-auto mb-10">
      <div className="w-2/3 text-left">
        <h1 className="text-xl font-bold">{data.title}</h1>
        <h2 className="text-gray-600">{data.description}</h2>
      </div>
      <div className="w-1/3 flex justify-end">
        <img
          src={data.image.url}
          alt="Thumbnail"
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default FairPlay;
