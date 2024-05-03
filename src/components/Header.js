import { Link } from "react-router-dom";
import { routes } from "../routes";
import styled from "styled-components";
import { mainInt, myColor } from "../style/GlobalStyled";
import { useEffect, useRef, useState } from "react";
import { nowPlaying, popular, rated, upComing } from "../api";
import logo from "../assets/logo.png";
import menu_btn from "../assets/menu_btn.png";
import searchImg from "../assets/searchImg.png";

const SHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: ${mainInt.sideInt};
  background-color: #fff;
  position: absolute;
  background-color: #fff;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: #fff;

  @media screen and (max-width: 768px) {
    padding: 0 10%;
  }
`;

const Logo = styled.div`
  margin: 8px auto;
  width: 20%;
  display: ${(props) => props.$imgLogo};
  align-items: center;
  justify-content: center;
`;

const HeaderBottom = styled.div`
  display: flex;
  justify-content: space-between;
  height: 10vh;
`;

const Menu = styled.ul`
  display: flex;
  width: 50%;
  line-height: 30px;
  font-size: 17px;
  font-weight: 700;
  height: 8vh;
  align-items: center;

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

  @media screen and (max-width: 1024px) and (min-width: 768px) {
    font-size: 16px;
    width: 80%;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const HeaderSearch = styled.div`
  line-height: 30px;
  font-weight: 700;
  display: flex;
  align-items: center;

  p {
    display: block;
    font-size: 16px;

    @media screen and (max-width: 1024px) {
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
    margin-left: 5px;
  }
`;

const MenuBtn = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    width: 30px;
  }
`;

export const Header = () => {
  const headerRef = useRef();

  const [nowData, setNowData] = useState();
  const [upData, setUpData] = useState();
  const [popData, setPopData] = useState();
  const [ratedData, setRatedData] = useState();
  const [showLogo, setShowLogo] = useState("flex");

  useEffect(() => {
    const scrollHandler = () => {
      const pageY = window.scrollY;

      if (pageY > 300) {
        setShowLogo("none");
        headerRef.current.style.position = "fixed";
        headerRef.current.style.backgroundColor = "rgba(255,255,255,0.8)";
        headerRef.current.style.backdropFilter = "blur(3px)";
      } else {
        setShowLogo("flex");
        headerRef.current.style.position = "absolute";
        headerRef.current.style.backgroundColor = "#fff";
        headerRef.current.style.backdropFilter = "blur(0px)";
      }
    };

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
      <Logo $imgLogo={showLogo}>
        <Link to={routes.home}>
          <img src={logo} alt="텔레무비 로고 이미지" />
        </Link>
      </Logo>

      <HeaderBottom>
        <MenuBtn>
          <img src={menu_btn} alt="햄버거" />
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
            <img src={searchImg} alt="search img" />
          </Link>
        </HeaderSearch>
      </HeaderBottom>
    </SHeader>
  );
};
