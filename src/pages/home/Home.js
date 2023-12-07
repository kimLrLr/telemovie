import { useEffect, useState } from "react";
import { PageTitle } from "../../components/PageTitle";
import { nowPlaying, popular } from "../../api";
import { Loading } from "../Loading";
import { ShowMovie } from "./ShowMovie";
import "swiper/css";
import { MainShowMovie } from "./MainShowMovie";
import { MiniShowMovie } from "./MiniShowMovie";

export const Home = () => {
  const [nowPlayingData, setNowPlayingData] = useState();
  const [popData, setPopData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { results: nowResult } = await nowPlaying();
        setNowPlayingData(nowResult);

        const { results: popResult } = await popular();
        setPopData(popResult);

        setIsLoading(false);
      } catch (error) {
        console.log("에러: " + error);
      }
    })();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          {nowPlayingData && (
            <>
              <PageTitle titleName="TeleMovie: Home" />
              <MainShowMovie movieData={nowPlayingData} />
              <MiniShowMovie movieData={nowPlayingData} />
              <ShowMovie movieData={popData} />
            </>
          )}
        </div>
      )}
    </>
  );
};
