import styled from "styled-components";
import { myColor } from "../style/GlobalStyled";

const SLoading = styled.section`
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h3 {
    text-align: center;
    margin: 80px 0 0 40px;
    font-size: 30px;
    font-weight: 700;
    letter-spacing: 5px;
    color: ${myColor.mainColor};
  }

  h5 {
    line-height: 80px;
    color: #808080;
    font-weight: 500;
    font-size: 18px;
  }
`;

export const Loading = () => {
  return (
    <SLoading>
      <h3>열심히 화면을 그리는 중이에요..!</h3>
      <h5>잠시만 기다려주세요...</h5>
      <img
        src="https://cdn.discordapp.com/attachments/1071326637540524122/1179983444504227850/loading_img.png"
        alt="텔레무비 로딩 이미지"
      />
    </SLoading>
  );
};
