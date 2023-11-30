import styled from "styled-components";

const FooterCon = styled.footer`
  width: 100vw;
  background-color: #fff;
  padding: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #dbdbdb;
  /* position: fixed;
  left: 0;
  bottom: 0;
  z-index: 5; */
`;

export const Footer = () => {
  return <FooterCon>&copy; 2023 kimLrLr</FooterCon>;
};
