import styled from "styled-components";
import { useEffect, useState } from "react";

import { Layout } from "../component/layout/Layout";
import { UserData } from "../../src/UserData";
import api from "../service/server";

export const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUserData = async () => {
      const res = await api.get("/users");
      setUsers(res.data);
    };
    getUserData();
  }, [users]);
  // console.log(users);

  return (
    <Layout>
      <SContainer>
        <SH2>USERS LIST</SH2>
        <STitle>
          <SP>名前</SP>
          <SP>メールアドレス</SP>
          <SP>年齢</SP>
          <SP>電話番号</SP>
        </STitle>
        <div>
          {users?.userData?.map((user) => (
            <UserData key={user.id} user={user} />
          ))}
        </div>
      </SContainer>
    </Layout>
  );
};

const SContainer = styled.div`
  text-align: center;
  padding-top: 150px;
`;

const SH2 = styled.h2`
  color: #daa520;
  font-weight: bold;
  font-size: 40px;
  text-shadow: 5px 3px 1px #ffd700;
  padding-bottom: 50px;
`;

const STitle = styled.div`
  display: flex;
  margin-bottom: 40px;
  font-weight: bold;
  text-align: left;
  justify-content: center;
`;

const SP = styled.p`
  width: 185px;
  margin-right: 20px;
`;
