import { client } from "@/lib/api";
import { GET_PLAYERS_PAGE } from "@/Queries/PlayersPage.query";
import CenterHeroBanner from "@/components/CenterHeroBanner";
import { HeroBannerData } from "@/lib/types";
import GameSlider from "@/components/Players/game-slider/game-slider";
import { GameSliderPlayersData } from "@/lib/types";
import SkillzDifference from "@/components/Players/skillz-difference/skillz-difference";
import { skillzDifferenceData } from "@/lib/types";
import { farePlayData } from "@/lib/types";
import FairPlay from "@/components/Players/fair-play/fair-play";
import PlayersLoveSkillz from "@/components/Players/players-love-skillz/players-love-skillz";
import { PlayersLoveSkillzData } from "@/lib/types";
import AheadGames from "@/components/Players/ahead-games/ahead-games";
import { GetAheadOfTheGameData } from "@/lib/types";

interface HeroBanner extends HeroBannerData {
  __typename: "HeroBanner";
}

interface GameSlider extends GameSliderPlayersData {
  __typename: "GameSlider";
}

interface SkillzDifference extends skillzDifferenceData {
  __typename: "SkillzDifference";
}

interface Hiring extends farePlayData {
  __typename: "Hiring";
}

interface PlayersLoveSkillz extends PlayersLoveSkillzData {
  __typename: "PlayersLoveSkillz";
}

interface GetAheadOfTheGame extends GetAheadOfTheGameData {
  __typename: "GetAheadOfTheGame";
}

export default async function Players() {
  const { data } = await client.query({ query: GET_PLAYERS_PAGE });

  type ModuleType =
    | HeroBanner
    | GameSlider
    | SkillzDifference
    | Hiring
    | PlayersLoveSkillz
    | GetAheadOfTheGame;

  const renderModule = (module: ModuleType) => {
    switch (module.__typename) {
      case "HeroBanner":
        return <CenterHeroBanner data={module} />;

      case "GameSlider":
        return <GameSlider data={module} />;

      case "SkillzDifference":
        return <SkillzDifference data={module} />;

      case "Hiring":
        return <FairPlay data={module} />;

      case "PlayersLoveSkillz":
        return <PlayersLoveSkillz data={module} />;

      case "GetAheadOfTheGame":
        return <AheadGames data={module} />;

      default:
        return null;
    }
  };

  return (
    <div className="text-center text-xl font-medium">
      {data?.pageCollection?.items[0]?.modulesCollection?.items.map(
        (module: ModuleType, index: number) => (
          <div key={index}>{renderModule(module)}</div>
        )
      )}
    </div>
  );
}
