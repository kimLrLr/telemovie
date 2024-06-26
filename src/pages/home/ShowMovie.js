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

  @media screen and (max-width: 450px) {
    padding: 0 10%;
    text-align: center;
  }
`;

const ConWrap = styled.div`
  padding: ${mainInt.sideInt};
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 50px;
  row-gap: 50px;

  @media screen and (max-width: 1024px) and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    column-gap: 30px;
  }
  @media screen and (max-width: 768px) {
    padding: 0 10%;
    grid-template-columns: repeat(1, 1fr);
    column-gap: 0px;
    row-gap: 40px;
  }
`;

const Con = styled.div``;

const Bg = styled.div`
  height: 300px;
  background: url(${IMG_URL}/w500/${(props) => props.$bgUrl}) no-repeat center /
    cover;
  border-radius: 15px;
  background-color: #808080;
`;

const MovieTitle = styled.h4`
  font-size: 18px;
  margin-top: 10px;

  @media screen and (max-width: 450px) {
    font-weight: 600;
    text-align: center;
  }
`;

export const ShowMovie = ({ movieData }) => {
  return (
    <Container>
      <Title>
        사람들이 좋아하는 <span>인기 상영작!</span>
      </Title>

      <ConWrap>
        {movieData.map((data) => (
          <Con key={data.id}>
            <Link to={`/detail/${data.id}`}>
              <Bg $bgUrl={data.backdrop_path} />
            </Link>
            <MovieTitle>{data.title}</MovieTitle>
          </Con>
        ))}
      </ConWrap>
    </Container>
  );
};
