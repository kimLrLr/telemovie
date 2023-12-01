import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { movieDetail } from "../../api";
import { Loading } from "../Loading";
import styled from "styled-components";
import { IMG_URL } from "../../constants";

const Con = styled.div`
  width: 100vw;
  height: 85vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrap = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  text-align: center;
`;

const PosterImg = styled.div`
  background-color: salmon;
  width: 50%;
  height: 100%;
  margin-right: 80px;
  background: url(${IMG_URL}/w1280/${(props) => props.$bgUrl}) no-repeat center /
    cover;
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
`;

const Rated = styled.div`
  font-size: 18px;
  font-weight: 500;
`;

const Desc = styled.div`
  background-color: #dbdbdb;
  max-width: 600px;
  border-radius: 20px;
  padding: 50px 40px;
  font-weight: 600;
  margin-top: 80px;
  line-height: 30px;
  color: #333;
  text-align: left;
`;

export const Detail = () => {
  const { id } = useParams();
  // =>다른 곳에서도 사용할 수 있도록 useParams사용
  // console.log(id);
  const [detailData, setDetailData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const detailData = await movieDetail(id);
        // console.log(detailData);
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
                    <Desc>{detailData.overview} </Desc>
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
