import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { IMG_URL } from "../../constants";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const MainBanner = styled.section`
  height: 85vh;
  background-color: lightgray;
  background: url(${IMG_URL}/original/${(props) => props.$bgUrl}) no-repeat
    center / cover;
`;

const PostWrap = styled.div`
  padding-top: 12vh;
`;

const params = {
  spaceBetween: 20,
  slidesPerView: 1.1,
  centeredSlides: true,
  loop: true, //반복
  autoplay: {
    delay: 2500,
    disableOnInteraction: false, //스와이프 후에 자동 재생
  },

  modules: [Autoplay, Pagination, Navigation],
};

export const MainShowMovie = ({ movieData }) => {
  return (
    <>
      <Swiper {...params}>
        {movieData.map((data) => (
          <SwiperSlide key={data.id}>
            <PostWrap>
              <Link to={`/detail/${data.id}`}>
                <MainBanner $bgUrl={data.backdrop_path} />
              </Link>
            </PostWrap>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
