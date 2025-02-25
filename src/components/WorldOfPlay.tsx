import { WorldOfPlayData } from "@/lib/types";
import Image from "next/image";

interface WorldOfPlayProps {
  data: WorldOfPlayData;
}

const WorldOfPlay: React.FC<WorldOfPlayProps> = async ({ data }) => {
  const arrOne = [data.imageCollection.items[0], data.imageCollection.items[1]];
  const arrTwo = [data.imageCollection.items[2], data.imageCollection.items[3]];
  return (
    <div className=" text-white py-16 px-6">
      <div className="grid grid-cols-2 gap-10 max-w-5xl mx-auto">
        {arrOne.map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <Image
              src={item.image.url}
              alt={item.image.title || "Image"}
              width={80}
              height={80}
            />
            <h3 className="text-xl text-black font-semibold mt-4">
              {item.title}
            </h3>
            <p className="text-black mt-2">{item.description}</p>
          </div>
        ))}
      </div>
      <h2 className="text-2xl mt-16 font-bold text-pink-500 text-center mb-10">
        {data.title}
      </h2>
      <div className="grid grid-cols-2 gap-10 max-w-5xl mx-auto">
        {arrTwo.map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <Image
              src={item.image.url}
              alt={item.image.title || "Image"}
              width={80}
              height={80}
            />
            <h3 className="text-xl text-black font-semibold mt-4">
              {item.title}
            </h3>
            <p className="text-black mt-2">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorldOfPlay;
