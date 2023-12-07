import { Link } from "react-router-dom";
import { routes } from "../routes";
import styled from "styled-components";
import { mainInt, myColor } from "../style/GlobalStyled";
import { useEffect, useRef, useState } from "react";
import { nowPlaying, popular, rated, upComing } from "../api";

const SHeader = styled.div`
  width: 99vw;
  height: 12vh;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #dbdbdb;
  padding: ${mainInt.sideInt};
  background-color: #fff;
  position: absolute;
  background-color: #fff;
  top: 0;
  left: 0;
  z-index: 10;

  @media screen and (max-width: 450px) {
    padding: 0 10%;
  }
`;

const Logo = styled.div`
  margin: 8px auto;
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
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

  @media screen and (max-width: 450px) {
    display: none;
  }
`;

const HeaderSearch = styled.div`
  line-height: 30px;
  font-size: 18px;
  font-weight: 700;
  width: 12%;

  p {
    @media screen and (max-width: 450px) {
      display: none;
    }
  }

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

const MenuBtn = styled.div`
  display: none;

  @media screen and (max-width: 450px) {
    display: block;
  }

  img {
    width: 65%;
  }
`;

export const Header = () => {
  const headerRef = useRef();

  const [nowData, setNowData] = useState();
  const [upData, setUpData] = useState();
  const [popData, setPopData] = useState();
  const [ratedData, setRatedData] = useState();

  const scrollHandler = () => {
    const pageY = window.scrollY;

    if (pageY > 300) {
      headerRef.current.style.position = "fixed";
      headerRef.current.style.top = "-5vh";
      headerRef.current.style.backgroundColor = "rgba(255,255,255,0.8)";
      headerRef.current.style.backdropFilter = "blur(3px)";
    } else {
      headerRef.current.style.position = "absolute";
      headerRef.current.style.top = "0";
      headerRef.current.style.backgroundColor = "#fff";
      headerRef.current.style.backdropFilter = "blur(0px)";
    }
  };

  useEffect(() => {
    return window.addEventListener("scroll", scrollHandler);
  });

  useEffect(() => {
    (async () => {
      try {
        const { results: nowResults } = await nowPlaying();
        setNowData(nowResults);

        const { results: popResults } = await popular();
        setPopData(popResults);

        const { results: ratedResults } = await rated();
        setRatedData(ratedResults);

        const { results: upResults } = await upComing();
        setUpData(upResults);
      } catch (error) {
        console.log("에러: " + error);
      }
    })();
  }, []);
  return (
    <SHeader ref={headerRef}>
      <Logo>
        <Link to={routes.home}>
          <img
            src="https://cdn.discordapp.com/attachments/1071326637540524122/1178952797169913866/logo.png"
            alt="텔레무비 로고 이미지"
          />
        </Link>
      </Logo>

      <HeaderBottom>
        <MenuBtn>
          <img
            src="https://cdn.discordapp.com/attachments/1071326637540524122/1181515654021533726/menu_btn.png"
            alt="햄버거"
          />
        </MenuBtn>
        <Menu>
          <li>
            <Link to={routes.slide} state={{ name: nowData }}>
              현재 상영작
            </Link>
          </li>
          <li>
            <Link to={routes.slide} state={{ name: popData }}>
              인기 작품
            </Link>
          </li>
          <li>
            <Link to={routes.slide} state={{ name: ratedData }}>
              평점 좋은 영화
            </Link>
          </li>
          <li>
            <Link to={routes.slide} state={{ name: upData }}>
              개봉 예정작
            </Link>
          </li>
        </Menu>

        <HeaderSearch>
          <Link to={routes.search}>
            <p>Search</p>
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
