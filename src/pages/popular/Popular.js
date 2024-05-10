import styled from "styled-components";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { Loading } from "../Loading";
import { useEffect, useState } from "react";
import { nowPlaying } from "../../api";
import { IMG_URL } from "../../constants";

const PostWrap = styled.div`
  padding-top: 12vh;
`;

const MainBanner = styled.div`
  height: 70vh;
  background-color: lightgray;
  background: url(${IMG_URL}/original/${(props) => props.$bgUrl}) no-repeat
    center / cover;
`;

const params = {
  spaceBetween: 20,
  slidesPerView: 3.5,
};

export const Popular = () => {
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
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Swiper {...params}>
            {nowPlayingData.map((data) => (
              <SwiperSlide key={data.id}>
                <PostWrap>
                  <Link to={`/detail/${data.id}`}>
                    <MainBanner $bgUrl={data.poster_path} />
                  </Link>
                </PostWrap>
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      )}
    </>
  );
};
