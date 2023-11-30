import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { IMG_URL } from "../../constants";

const MainBanner = styled.section`
  height: 80vh;
  background-color: lightgray;
  /* position: relative; */
  background: url(${IMG_URL}/original/${(props) => props.$bgUrl}) no-repeat
    center / cover;
`;

const PostWrap = styled.div`
  padding-top: 12vh;
`;

const params = {
  spaceBetween: 20,
  slidesPerView: 1.1,
  // breakpoints: {
  //   1024: {
  //     spaceBetween: 20,
  //     slidesPerView: 5.5,
  //   },
  //   640: {
  //     spaceBetween: 15,
  //     slidesPerView: 4,
  //   },
  //   320: {
  //     spaceBetween: 10,
  //     slidesPerView: 3.2,
  //   },
  // },
};

export const MainShowMovie = ({ movieData }) => {
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
