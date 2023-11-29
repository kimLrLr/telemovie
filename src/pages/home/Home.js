import styled from "styled-components";

const HomeWrap = styled.div`
  width: 300vh;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 12vh;
`;

const CoverBg = styled.div`
  width: 90%;
  height: 80vh;
  background-color: salmon;
  margin-right: 20px;
`;

export const Home = () => {
  return (
    <>
      <HomeWrap>
        <CoverBg />
        <CoverBg />
        <CoverBg />
      </HomeWrap>
    </>
  );
};
