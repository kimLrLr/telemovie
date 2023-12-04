import { ShowSlide } from "./ShowSlide";
import { Loading } from "../Loading";
import { useEffect, useState } from "react";
import { rated } from "../../api";

export const Rated = () => {
  const [ratedData, setRatedData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { results } = await rated();
        setRatedData(results);

        setIsLoading(false);
      } catch (error) {
        console.log("에러: " + error);
      }
    })();
  }, []);
  return <>{isLoading ? <Loading /> : <ShowSlide movieData={ratedData} />}</>;
};
