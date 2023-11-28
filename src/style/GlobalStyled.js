import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const mainInt = {
  sideInt: "0 30px",
};

export const myColor = {
  mainColor: "#F64D4D",
};

export const GlobalStyled = createGlobalStyle`
    ${reset}

    *{
        box-sizing: border-box;
    }

    ul, li{
        list-style: none;
    }

    body{
        letter-spacing: -1px;
        word-break: break-all;
        font-family: 'Noto Sans KR', sans-serif;
    }

    a{
        text-decoration: none;
        color: #333;
    }
`;
