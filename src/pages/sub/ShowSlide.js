import styled from "styled-components";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
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

export const ShowSlide = ({ movieData }) => {
  return (
    <>
      <Swiper {...params}>
        {movieData.map((data) => (
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
