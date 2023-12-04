import { ShowSlide } from "./ShowSlide";
import { Loading } from "../Loading";
import { useEffect, useState } from "react";
import { popular } from "../../api";

export const Pop = () => {
  const [popData, setPopData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { results } = await popular();
        setPopData(results);

        setIsLoading(false);
      } catch (error) {
        console.log("에러: " + error);
      }
    })();
  }, []);
  return <>{isLoading ? <Loading /> : <ShowSlide movieData={popData} />}</>;
};
