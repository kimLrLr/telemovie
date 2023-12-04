import { ShowSlide } from "./ShowSlide";
import { Loading } from "../Loading";
import { useEffect, useState } from "react";
import { upComing } from "../../api";

export const Coming = () => {
  const [upData, setUpData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { results } = await upComing();
        setUpData(results);

        setIsLoading(false);
      } catch (error) {
        console.log("에러: " + error);
      }
    })();
  }, []);
  return <>{isLoading ? <Loading /> : <ShowSlide movieData={upData} />}</>;
};
