import Head from "next/head";
import { GameSliderData } from "@/lib/types";

interface GameSliderSchemaProps {
  data: GameSliderData;
}

const GameSliderSchema: React.FC<GameSliderSchemaProps> = ({ data }) => {
  const media = data.mediaCollection.items;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: data.heading,
    description: data.description,
    itemListElement: media.map((item, index) => ({
      "@type": "VideoGame",
      position: index + 1,
      name: item.title,
      description: item.subtitle,
      image: item.img.url,
      trailer: {
        "@type": "VideoObject",
        name: item.title,
        thumbnailUrl: item.img.url,
        contentUrl: item.video.url,
        uploadDate: new Date().toISOString(),
      },
    })),
  };

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </Head>
  );
};

export default GameSliderSchema;
