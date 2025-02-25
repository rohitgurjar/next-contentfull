import { HiringData } from "@/lib/types";
import Image from "next/image";

interface HiringProps {
  data: HiringData;
}

const Hiring: React.FC<HiringProps> = async ({ data }) => {
  const cta = data?.ctAsCollection?.items?.[0];
  return (
    <div className="text-white p-8 rounded-xl flex items-center justify-between bg-[#3e00cd] ml-40 mr-40 mb-20">
      <div className="max-w-lg">
        <h2 className="text-3xl font-bold">{data.title}</h2>
        <p className="mt-2 text-gray-300">{data.description}</p>
        {cta && (
          <a
            key={cta._id}
            href={cta.url}
            className="inline-block px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-300 transition-all mt-8"
          >
            {cta.label}
          </a>
        )}
      </div>
      <div className="relative w-48 h-48">
        <Image
          src={data.image.url}
          alt="Hiring Image"
          layout="fill"
          objectFit="contain"
        />
      </div>
    </div>
  );
};

export default Hiring;
