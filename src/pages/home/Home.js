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

  // console.log(popData);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          {nowPlayingData && (
            <>
              <PageTitle titleName="TeleMovie:HOME" />
              <MainShowMovie movieData={nowPlayingData} />
              {/* 현재 상영중인 영화 3개만 보여주고싶음.(현재는 전체 list가 다 나오게 되어있음..) */}
              <MiniShowMovie movieData={nowPlayingData} />
              {/* 앞에서 현재 상영중인 영화 3개를 제외하고 보여주고 싶음. */}
              <ShowMovie movieData={popData} />
            </>
          )}
        </div>
      )}
    </>
  );
};
