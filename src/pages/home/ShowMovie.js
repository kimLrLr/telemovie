import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { IMG_URL } from "../../constants";
import { mainInt, myColor } from "../../style/GlobalStyled";

const Container = styled.section`
  margin: 60px 0;
`;

const Title = styled.h3`
  padding: ${mainInt.sideInt};
  margin-bottom: 30px;
  font-size: 20px;
  font-weight: 700;

  span {
    color: ${myColor.mainColor};
    font-size: 25px;
  }
`;

const CoverBg = styled.div`
  height: 500px;
  background: url(${IMG_URL}/w500/${(props) => props.$bgUrl}) no-repeat center /
    cover;
  border-radius: 5px;
  margin-bottom: 20px;
`;

const MovieTitle = styled.h4`
  font-size: 18px;
`;

const params = {
  spaceBetween: 20,
  slidesPerView: 4,
};

export const ShowMovie = ({ movieData }) => {
  return (
    <Container>
      <Title>
        사람들이 좋아하는 <span>인기 상영작!</span>
      </Title>

      <Swiper {...params}>
        {movieData.map((data) => (
          <SwiperSlide key={data.id}>
            <Link to={`/detail/${data.id}`}>
              <CoverBg $bgUrl={data.poster_path} />
              <MovieTitle>{data.title}</MovieTitle>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};