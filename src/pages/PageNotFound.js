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
`;

export const PageNotFound = () => {
  return (
    <>
      <PNFWrap>
        <h3>요청하신 페이지를 찾을 수 없습니다.</h3>
        <img
          src="https://cdn.discordapp.com/attachments/1071326637540524122/1181500243326554152/404.png"
          alt="텔레무비 404 이미지"
        />
      </PNFWrap>
    </>
  );
};
