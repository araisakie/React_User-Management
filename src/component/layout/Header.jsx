import { Link } from "react-router-dom";
import styled from "styled-components";

export const Header = () => {
  return (
    <SHeader>
      <SLink to="/">HOME</SLink>
      <SLink to="/user">SIGNUP</SLink>
    </SHeader>
  );
};

const SHeader = styled.header`
  background: -moz-linear-gradient(top, #ffc778, #ffffcc);
  background: -webkit-linear-gradient(top, #ffc778, #ffffcc);
  background: linear-gradient(to bottom, #ffc778, #ffffcc);
  text-align: right;
  padding: 30px 0;
  position: fixed;
  width: 100%;
`;

const SLink = styled(Link)`
  text-decoration: none;
  margin-right: 50px;
  color: #fff;
  font-weight: bold;
  font-size: 25px;
  text-shadow: 4px 3px 3px #ff4f02;
  &:hover {
    color: #ff8c00;
    text-shadow: 4px 3px 3px #fff;
  }
`;
