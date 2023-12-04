import { Link } from "react-router-dom";
import { routes } from "../routes";
import styled from "styled-components";
import { mainInt, myColor } from "../style/GlobalStyled";
import { Popular } from "../pages/popular/Popular";

const SHeader = styled.div`
  width: 100vw;
  height: 12vh;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #dbdbdb;
  padding: ${mainInt.sideInt};
  background-color: #fff;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
`;

const Logo = styled.div`
  margin: 8px auto;
  width: 20%;
  font-size: 28px;
  font-weight: 700;
`;

const HeaderBottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Menu = styled.ul`
  display: flex;
  width: 45%;
  line-height: 30px;
  font-size: 18px;
  font-weight: 700;

  li {
    width: 25%;
  }

  a {
    color: #808080;
    transition: 0.3s;
  }

  a:hover {
    color: ${myColor.mainColor};
  }
`;

const HeaderSearch = styled.div`
  line-height: 30px;
  font-size: 18px;
  font-weight: 700;
  width: 8%;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #808080;
    transition: 0.3s;
  }

  a:hover {
    color: ${myColor.mainColor};
  }

  img {
    width: 40px;
    margin-bottom: -5px;
  }
`;

export const Header = () => {
  return (
    <SHeader>
      <Logo>
        <Link to={routes.home}>
          <img
            src="https://cdn.discordapp.com/attachments/1071326637540524122/1178952797169913866/logo.png"
            alt="텔레무비 로고 이미지"
          />
        </Link>
      </Logo>

      <HeaderBottom>
        <Menu>
          <li>
            <Link to={routes.now}>현재 상영작</Link>
          </li>
          <li>
            <Link to={routes.pop}>인기 작품</Link>
          </li>
          <li>
            <Link to={routes.rated}>평점 좋은 영화</Link>
          </li>
          <li>
            <Link to={routes.coming}>개봉 예정작</Link>
          </li>
        </Menu>

        <HeaderSearch>
          <Link to={routes.search}>
            Search
            <img
              src="https://cdn.discordapp.com/attachments/1071326637540524122/1178975235412865024/searchImg.png"
              alt="search img"
            />
          </Link>
        </HeaderSearch>
      </HeaderBottom>
    </SHeader>
  );
};
