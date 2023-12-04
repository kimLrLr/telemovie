import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { IMG_URL } from "../../constants";

const Container = styled.section`
  margin: 30px 0;
`;

const CoverBg = styled.div`
  height: 380px;
  background: url(${IMG_URL}/w500/${(props) => props.$bgUrl}) no-repeat center /
    cover;
  border-radius: 5px;
  margin-bottom: 20px;
`;

const params = {
  spaceBetween: 20,
  slidesPerView: 4.5,
  breakpoints: {
    1024: {
      spaceBetween: 15,
      slidesPerView: 4.5,
    },
    640: {
      spaceBetween: 15,
      slidesPerView: 3.5,
    },
    320: {
      spaceBetween: 10,
      slidesPerView: 2.2,
    },
  },
};

export const MiniShowMovie = ({ movieData }) => {
  return (
    <Container>
      <Swiper {...params}>
        {movieData.map((data) => (
          <SwiperSlide key={data.id}>
            <Link to={`/detail/${data.id}`}>
              <CoverBg $bgUrl={data.poster_path} />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};
