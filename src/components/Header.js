import { Link } from "react-router-dom";
import { routes } from "../routes";
import styled from "styled-components";

const SHeader = styled.div`
  width: 100vw;
  height: 10vh;
  display: flex;
  flex-direction: column;
  background-color: #808080;
`;

const Logo = styled.div`
  margin: 8px auto;
  width: 20%;
  font-size: 28px;
  font-weight: 700;
`;

const HeaderBottom = styled.div``;

const Menu = styled.div``;

const HeaderSearch = styled.div``;

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
            <SearchImg />
          </Link>
        </HeaderSearch>
      </HeaderBottom>
    </SHeader>
  );
};
