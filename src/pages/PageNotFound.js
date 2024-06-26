import styled from "styled-components";

const PNFWrap = styled.section`
  width: 100vw;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h3 {
    text-align: center;
    font-size: 30px;
    color: #808080;
    font-weight: 700;
    margin-top: 100px;
  }

  img {
    width: 50%;
  }

  @media screen and (max-width: 1024px) and (min-width: 768px) {
    h3 {
      font-size: 23px;
    }
  }

  @media screen and (max-width: 768px) {
    h3 {
      font-size: 18px;
    }
  }
`;

export const PageNotFound = () => {
  return (
    <>
      <PNFWrap>
        <h3>요청하신 페이지를 찾을 수 없습니다.</h3>
        <img
          src={process.env.PUBLIC_URL + `/img/404.png`}
          alt="텔레무비 404 이미지"
        />
      </PNFWrap>
    </>
  );
};
