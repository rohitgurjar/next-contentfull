import CenterHeroBanner from "@/components/CenterHeroBanner";
import GameSlider from "@/components/GameSlider";
import RATING from "@/components/rating";
import FAQ from "@/components/FAQ";
import Hiring from "@/components/Hiring";
import News from "@/components/News";
import WorldOfPlay from "@/components/WorldOfPlay";
import { client } from "@/lib/api";
import {
  HeroBannerData,
  WorldOfPlayData,
  HiringData,
  NewsData,
  FaqData,
  RatingData,
  GameSliderData,
} from "@/lib/types";
import { GET_HOME_PAGE } from "@/Queries/HomePage.query";

export default async function Home() {
  const { data } = await client.query({ query: GET_HOME_PAGE });

  interface HeroBanner extends HeroBannerData {
    __typename: "HeroBanner";
  }

  interface GameSlider extends GameSliderData {
    __typename: "GameSlider";
  }

  interface Rating extends RatingData {
    __typename: "Rating";
  }

  interface WorldOfPlay extends WorldOfPlayData {
    __typename: "WorldOfPlay";
  }

  interface Hiring extends HiringData {
    __typename: "Hiring";
  }

  interface News extends NewsData {
    __typename: "News";
  }

  interface Faq extends FaqData {
    __typename: "Faq";
  }

  type ModuleType =
    | HeroBanner
    | GameSlider
    | Rating
    | WorldOfPlay
    | Hiring
    | News
    | Faq;

  const renderModule = (module: ModuleType) => {
    switch (module.__typename) {
      case "HeroBanner":
        return <CenterHeroBanner data={module} />;

      case "GameSlider":
        return <GameSlider data={module} />;

      case "Rating":
        return <RATING data={module} />;

      case "WorldOfPlay":
        return <WorldOfPlay data={module} />;

      case "Hiring":
        return <Hiring data={module} />;

      case "News":
        return <News data={module} />;

      case "Faq":
        return <FAQ data={module} />;

      default:
        return null;
    }
  };
  return (
    <div className="mx-auto">
      {data?.pageCollection?.items[0]?.modulesCollection?.items.map(
        (module: ModuleType, index: number) => (
          <div key={index}>{renderModule(module)}</div>
        )
      )}
    </div>
  );
}
