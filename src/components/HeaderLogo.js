import { Link } from "react-router-dom";
import { routes } from "../routes";
import logo from "../assets/logo.png";
import styled from "styled-components";

const Logo = styled.div`
  margin: 8px auto;
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1024px) and (min-width: 768px) {
  }

  @media screen and (max-width: 768px) {
  }
`;

export const HeaderLogo = () => {
  <Logo>
    <Link to={routes.home}>
      <img src={logo} alt="텔레무비 로고 이미지" />
    </Link>
  </Logo>;
};
