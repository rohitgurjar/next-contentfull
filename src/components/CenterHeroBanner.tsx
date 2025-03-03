import { HeroBannerData } from "@/lib/types";
import Head from "next/head";

interface CenterHeroBannerProps {
  data: HeroBannerData;
}

const CenterHeroBanner: React.FC<CenterHeroBannerProps> = ({ data }) => {
  const jsonLd: any = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: data.title,
    description: data.description,
    url: typeof window !== "undefined" ? window.location.href : "",
    ...(data.image?.url
      ? {
          image: {
            "@type": "ImageObject",
            url: data.image.url,
          },
        }
      : {}),
    ...(data.image?.url && data.image.url.endsWith(".mp4")
      ? {
          video: {
            "@type": "VideoObject",
            name: data.title,
            description: data.description,
            thumbnailUrl: data.image.url,
            contentUrl: data.image.url,
            uploadDate: new Date().toISOString(),
          },
        }
      : {}),
    potentialAction: data.ctAsCollection.items.map((cta) => ({
      "@type": "Action",
      name: cta.label,
      target: cta.url,
    })),
  };

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>
      <section className="relative flex items-center justify-center h-screen bg-black text-white mb-20">
        {data.image?.url ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={data.image.url} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${data.image.url})` }}
          ></div>
        )}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        {data?.alignment === "Center" && (
          <div className="relative z-10 text-center p-6">
            <h1 className="text-5xl font-bold mb-4">{data.title}</h1>
            <p className="text-lg mb-6">{data.description}</p>
            <div className="flex justify-center gap-4">
              {data.ctAsCollection.items.map((cta) => (
                <a
                  key={cta._id}
                  href={cta.url}
                  className="px-6 py-2 bg-white text-black font-semibold rounded-lg hover:bg-gray-300"
                >
                  {cta.label}
                </a>
              ))}
            </div>
          </div>
        )}
        {data.alignment === "Left" && (
          <div className="absolute left-10 top-1/3 max-w-[600px] text-left z-10 pl-32">
            <small className="text-red-500 uppercase font-semibold tracking-wide">
              {data.headingTop}
            </small>
            <h1 className="text-6xl font-bold text-white leading-tight mt-2">
              {data.title}
            </h1>
            <p className="text-lg text-gray-300 mt-4">{data.description}</p>

            <div className="mt-6">
              {data.ctAsCollection.items.map((cta) => (
                <a
                  key={cta._id}
                  href={cta.url}
                  className="inline-block px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-300 transition-all"
                >
                  {cta.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default CenterHeroBanner;
