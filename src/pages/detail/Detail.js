import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { movieDetail } from "../../api";
import { Loading } from "../Loading";
import styled from "styled-components";
import { IMG_URL } from "../../constants";
import { PageTitle } from "../../components/PageTitle";

const Con = styled.div`
  width: 100vw;
  height: 85vh;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  overflow: hidden;
`;

const Wrap = styled.div`
  width: 90vw;
  height: 100%;
  display: flex;
  text-align: center;
  justify-content: center;
`;

const PosterImg = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  margin-right: 20px;
  background: url(${IMG_URL}/w1280/${(props) => props.$bgUrl}) no-repeat center /
    cover;
  overflow: hidden;
`;

const TxtWrap = styled.div`
  max-width: 600px;
  padding: 150px 0;
  width: 100%;
  div {
    margin-bottom: 20px;
  }
`;

const Title = styled.h2`
  font-size: 40px;
  font-weight: 700;
  line-height: 60px;
  margin-bottom: 20px;

  @media screen and (max-width: 1024px) and (min-width: 768px) {
    font-size: 30px;
    line-height: 38px;
  }
  @media screen and (max-width: 768px) {
    font-size: 20px;
    line-height: 25px;
    margin-bottom: 10px;
  }
`;

const Genre = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 20px;
`;

const Release = styled.div`
  font-size: 18px;
  font-weight: 600;

  @media screen and (max-width: 1024px) and (min-width: 768px) {
    font-size: 16px;
  }
  @media screen and (max-width: 768px) {
    font-size: 15px;
  }
`;

const Rated = styled.div`
  font-size: 18px;
  font-weight: 500;

  @media screen and (max-width: 1024px) and (min-width: 768px) {
    font-size: 16px;
  }
  @media screen and (max-width: 768px) {
    font-size: 15px;
  }
`;

const DescScroll = styled.nav`
  display: flex;
  overflow: auto;
  height: 80%;

  background-color: #dbdbdb;
  max-width: 600px;
  border-radius: 20px;
  max-height: 300px;

  &::-webkit-scrollbar {
    width: 4px;
    border-radius: 50px;
    background: rgba(255, 255, 255, 0.4);
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.3);
    border-radius: 6px;
  }
`;

const Desc = styled.div`
  padding: 20px;
  font-weight: 600;
  line-height: 30px;
  color: #333;
  text-align: left;

  @media screen and (max-width: 1024px) and (min-width: 768px) {
    padding: 15px;
    font-size: 16px;
  }

  @media screen and (max-width: 768px) {
    padding: 10px;
    font-size: 14px;
    line-height: 23px;
  }
`;

export const Detail = () => {
  const { id } = useParams();
  // =>다른 곳에서도 사용할 수 있도록 useParams사용
  const [detailData, setDetailData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const detailData = await movieDetail(id);
        setDetailData(detailData);
        setLoading(false);
      } catch (error) {
        console.log("에러: " + error);
      }
    })();
  }, [id]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          {movieDetail && (
            <>
              <PageTitle titleName="LrLrMovie: movie detail" />
              <Con>
                <Wrap>
                  <PosterImg $bgUrl={detailData.backdrop_path} />
                  <TxtWrap>
                    <Title>{detailData.title}</Title>
                    <Genre>
                      {detailData.genres.map((genre) => (
                        <li key={genre.id}>
                          <span>▹{genre.name}</span>
                        </li>
                      ))}
                    </Genre>
                    <Release>개봉일: {detailData.release_date}</Release>
                    <Rated>평점 {Math.round(detailData.vote_average)}점</Rated>
                    <DescScroll>
                      <Desc>{detailData.overview} </Desc>
                    </DescScroll>
                  </TxtWrap>
                </Wrap>
              </Con>
            </>
          )}
        </>
      )}
    </>
  );
};
