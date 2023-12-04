import { ShowSlide } from "./ShowSlide";
import { Loading } from "../Loading";
import { useEffect, useState } from "react";
import { nowPlaying } from "../../api";

export const Now = () => {
  const [nowPlayingData, setNowPlayingData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { results: nowResult } = await nowPlaying();
        setNowPlayingData(nowResult);

        setIsLoading(false);
      } catch (error) {
        console.log("에러: " + error);
      }
    })();
  }, []);
  return (
    <>{isLoading ? <Loading /> : <ShowSlide movieData={nowPlayingData} />}</>
  );
};
