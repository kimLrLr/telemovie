import styled from "styled-components";
import menu_btn from "../assets/menu_btn.png";
import { useEffect, useState } from "react";
import { nowPlaying, popular, rated, upComing } from "../api";
import { Link } from "react-router-dom";
import { routes } from "../routes";
import { myColor } from "../style/GlobalStyled";

const MenuBtn = styled.div`
  display: none;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    width: 30px;
  }
`;

const CloseBtn = styled.div`
  color: ${myColor.mainColor};
  position: fixed;
  top: 10px;
  right: 20px;
  z-index: 10;
  cursor: pointer;

  font-size: 30px;
  font-weight: 700;
`;

const SMenu = styled.ul`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;

  width: 100%;
  height: 100vh;
  background-color: #fff;

  display: flex;
  flex-direction: column;
  justify-content: center;

  font-size: 20px;
  font-weight: 700;

  li {
    text-align: center;
    line-height: 200px;

    height: 25%;
    background-color: salmon;
  }

  a {
    display: block;
    color: #808080;
    transition: 0.3s;
    width: 100%;
    height: 100vh;
    background-color: #fff;
  }

  a:hover {
    color: ${myColor.mainColor};
  }

  @media screen and (min-width: 660px) {
    li {
      line-height: 100px;
    }
  }
`;

export const HamBtn = () => {
  const [nowData, setNowData] = useState();
  const [upData, setUpData] = useState();
  const [popData, setPopData] = useState();
  const [ratedData, setRatedData] = useState();

  const [isOpen, setIsOpen] = useState(false);

  const openHandler = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = "hidden";
  };

  const closeHandler = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = "unset";
  };

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
    <>
      {!isOpen && (
        <MenuBtn onClick={openHandler}>
          <img src={menu_btn} alt="햄버거" />
        </MenuBtn>
      )}
      {isOpen && (
        <>
          <CloseBtn onClick={closeHandler}>X</CloseBtn>
          <SMenu>
            <li onClick={closeHandler}>
              <Link to={routes.slide} state={{ name: nowData }}>
                현재 상영작
              </Link>
            </li>
            <li onClick={closeHandler}>
              <Link to={routes.slide} state={{ name: popData }}>
                인기 작품
              </Link>
            </li>
            <li onClick={closeHandler}>
              <Link to={routes.slide} state={{ name: ratedData }}>
                평점 좋은 영화
              </Link>
            </li>
            <li onClick={() => setIsOpen(!isOpen)}>
              <Link to={routes.slide} state={{ name: upData }}>
                개봉 예정작
              </Link>
            </li>
          </SMenu>
        </>
      )}
    </>
  );
};
