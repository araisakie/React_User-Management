import styled from "styled-components";
import { useState } from "react";
import { useHistory } from "react-router-dom";

import { Button, buttonStyleLists } from "../component/atoms/button/BaseButton";
import { Layout } from "../component/layout/Layout";
import api from "../service/server";

export const SignUp = () => {
  const history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [telephone, setTelephone] = useState("");

  const onClickCancel = () => history.goBack();

  const onClickSave = async () => {
    try {
      const res = await api.post("/users", {
        name,
        email,
        age,
        telephone,
      });
    } catch (error) {
      console.log(error);
    } finally {
      history.push("/");
    }
  };

  const onChangeName = (e) => setName(e.target.value);
  const onChangeEmail = (e) => setEmail(e.target.value);
  const onChangeAge = (e) => setAge(e.target.value);
  const onChangeTelephone = (e) => setTelephone(e.target.value);

  return (
    <Layout showFooter>
      <SMain>
        <SH2>SIGN UP</SH2>
        <div>
          <div>
            <SLabel>名前</SLabel>
            <SInput
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={onChangeName}
              placeholder="名前を入力してください"
            />
          </div>
          <div>
            <SLabel>メールアドレス</SLabel>
            <SInput
              type="text"
              name="email"
              id="email"
              value={email}
              onChange={onChangeEmail}
              placeholder="メールアドレスを入力してください"
            />
          </div>
          <div>
            <SLabel>年齢</SLabel>
            <SInput
              type="number"
              name="age"
              id="age"
              value={age}
              onChange={onChangeAge}
              placeholder="年齢を入力してください"
            />
          </div>
          <div>
            <SLabel>電話番号</SLabel>
            <SInput
              type="number"
              name="telephone"
              id="telephone"
              value={telephone}
              onChange={onChangeTelephone}
              placeholder="電話番号を入力してください"
            />
          </div>
          <Button styleType="save" onClick={onClickSave}>
            削除
          </Button>
          <Button styleType="cancel" onClick={onClickCancel}>
            キャンセル
          </Button>
        </div>
      </SMain>
    </Layout>
  );
};

const SMain = styled.div`
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

const SLabel = styled.label`
  width: 200px;
  margin-bottom: 20px;
  display: inline-block;
`;

const SInput = styled.input`
  width: 300px;
  padding: 4px 10px;
  margin: 5px;
`;
