import { useEffect, useState } from "react";
import { PageTitle } from "../../components/PageTitle";
import { nowPlaying, popular } from "../../api";
import { Loading } from "../Loading";
import { ShowMovie } from "./ShowMovie";
import styled from "styled-components";
import "swiper/css";
import { MainShowMovie } from "./MainShowMovie";

const MainPosterWrap = styled.div`
  width: 300vw;
  height: 100%;
  display: flex;
`;

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

              <ShowMovie titleName={"인기 영화"} movieData={popData} />
            </>
          )}
        </div>
      )}
    </>
  );
};
