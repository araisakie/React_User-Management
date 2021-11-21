import styled from "styled-components";
import { useState } from "react";
import { useHistory } from "react-router-dom";

import { Button } from "../component/atoms/button/Button";
import { SecondaryButton } from "../component/atoms/button/SecondaryButton";

export const SignUp = () => {
  const history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [telephone, setTelephone] = useState("");

  const onClickSave = () => {
    history.push("/");
  };

  const onClickCancel = () => history.goBack();

  const onChangeName = (e) => setName(e.target.value);
  const onChangeEmail = (e) => setEmail(e.target.value);
  const onChangeAge = (e) => setAge(e.target.value);
  const onChangeTelephone = (e) => setTelephone(e.target.value);

  return (
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
        <SecondaryButton onClick={onClickSave}>保存</SecondaryButton>
        <Button onClick={onClickCancel}>キャンセル</Button>
      </div>
    </SMain>
  );
};

const SMain = styled.div`
  text-align: center;
`;
const SH2 = styled.h2`
  color: #daa520;
  font-weight: bold;
  font-size: 40px;
  text-shadow: 5px 3px 1px #ffd700;
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
