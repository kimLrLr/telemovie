import { useEffect, useState } from "react";
import styled from "styled-components";
import { myColor } from "../style/GlobalStyled";

const TopBtn = styled.button`
  position: fixed;
  bottom: 5%;
  right: 5%;
  z-index: 10;
  background: #f64d4da3;
  border: 0;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  color: #fff;
  font-weight: 700;
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    background: ${myColor.mainColor};
  }
`;

export const TopButton = () => {
  const [showButton, setShowButton] = useState(false);

  const scrollTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleShowButton = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleShowButton);
    return () => {
      window.removeEventListener("scroll", handleShowButton);
    };
  }, []);

  return showButton && <TopBtn onClick={scrollTop}>TOP</TopBtn>;
};
