import { Link } from "react-router-dom";
import { routes } from "../routes";
import styled from "styled-components";
import { mainInt, myColor } from "../style/GlobalStyled";

const SHeader = styled.div`
  width: 100vw;
  height: 12vh;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #dbdbdb;
  padding: ${mainInt.sideInt};
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
  text-align: center;
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
  text-align: center;
  line-height: 30px;
  font-size: 18px;
  font-weight: 700;
  width: 25%;

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

const SearchImg = styled.div``;

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
            <Link to={routes.popular}>액션</Link>
          </li>
          <li>
            <Link to={routes.popular}>코미디</Link>
          </li>
          <li>
            <Link to={routes.popular}>스릴러</Link>
          </li>
          <li>
            <Link to={routes.popular}>로맨스</Link>
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
