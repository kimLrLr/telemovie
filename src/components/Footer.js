import styled from "styled-components";

const FooterCon = styled.footer`
  padding: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #dbdbdb;
`;

export const Footer = () => {
  return <FooterCon>&copy; 2023 kimLrLr</FooterCon>;
};
