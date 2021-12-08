import styled from "styled-components";

import { Layout } from "../component/layout/Layout";
import { UserData } from "../../src/UserData";
import axios from "axios";

const users = [...Array(20).keys()].map((val) => {
  return {
    id: val,
    name: `araisakie${val}`,
    email: "sakie@test.com",
    age: "27歳",
    telephone: "090-1111-2234",
  };
});

export const Home = () => {
  return (
    <Layout showFooter>
      <SContainer>
        <SH2>USERS LIST</SH2>
        <SList>
          {users.map((user) => (
            <UserData key={user.id} user={user} />
          ))}
        </SList>
      </SContainer>
    </Layout>
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

const SList = styled.div`
  width: 100%;
  height: 400px;
  overflow: scroll;
`;
