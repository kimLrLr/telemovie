import styled from "styled-components";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link, useLocation } from "react-router-dom";
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
  breakpoints: {
    1024: {
      spaceBetween: 15,
      slidesPerView: 4.5,
    },
    640: {
      spaceBetween: 15,
      slidesPerView: 2.8,
    },
    320: {
      spaceBetween: 5,
      slidesPerView: 1.7,
    },
  },
};

export const ShowSlide = () => {
  const movieData = useLocation();
  return (
    <>
      <Swiper {...params}>
        {movieData.state.name.map((data) => (
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
  );
};
