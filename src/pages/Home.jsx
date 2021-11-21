import styled from "styled-components";

export const Home = () => {
  return (
    <SContainer>
      <SH2>USERS LIST</SH2>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;

const SH2 = styled.h2`
  color: #daa520;
  font-weight: bold;
  font-size: 40px;
  text-shadow: 5px 3px 1px #ffd700;
`;
