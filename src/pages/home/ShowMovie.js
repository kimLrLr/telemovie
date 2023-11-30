import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { IMG_URL } from "../../constants";

const Container = styled.section`
  margin-bottom: 80px;
  a {
    color: white;
  }
`;

const Title = styled.h3`
  font-size: 50px;
  font-weight: 700;
  margin-bottom: 50px;

  @media screen and (max-width: 450px) {
    font-size: 30px;
    margin-bottom: 30px;
  }
`;

const CoverBg = styled.div`
  /* width: 150px; */
  /* 가로값Xxxx */
  height: 250px;
  background: url(${IMG_URL}/w500/${(props) => props.$bgUrl}) no-repeat center /
    cover;
  border-radius: 15px;
  margin-bottom: 20px;

  @media screen and (max-width: 450px) {
    height: 150px;
    margin-bottom: 15px;
  }
`;

const MovieTitle = styled.h4`
  font-size: 18px;

  @media screen and (max-width: 450px) {
    font-size: 16px;
    line-height: 22px;
  }
`;

const params = {
  spaceBetween: 20,
  slidesPerView: 4.5,
  breakpoints: {
    1024: {
      spaceBetween: 20,
      slidesPerView: 5.5,
    },
    640: {
      spaceBetween: 15,
      slidesPerView: 4,
    },
    320: {
      spaceBetween: 10,
      slidesPerView: 3.2,
    },
  },
};

export const ShowMovie = ({ movieData }) => {
  return (
    <Container>
      <Title>최신 인기 상영작</Title>

      <Swiper {...params}>
        {/* ...params는 params를 불러왔을때 생기는 중괄호를 벗겨내기 위함 */}
        {movieData.map((data) => (
          <SwiperSlide key={data.id}>
            {/* Swiper 안에는 SwiperSlide가 있어야하기 때문에 Link를 그 안쪽으로 */}
            <Link to={`/detail/${data.id}`}>
              <CoverBg $bgUrl={data.poster_path} />
              <MovieTitle>{data.title}</MovieTitle>
            </Link>
          </SwiperSlide>
        ))}
        {/* => 배열을 배열 수만큼 반복해서 사용하게 해주기 위해 map 사용 */}
      </Swiper>
    </Container>
  );
};
