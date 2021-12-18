import React, { memo, useCallback, useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import { DeleteButton } from "./component/atoms/button/DeleteButton";
import api from "./service/server";

export const UserData = memo((props) => {
  const { user } = props;

  const history = useHistory();

  const onClickDelete = async (id) => {
    try {
      const res = await api.delete(`users/${id}`);
      alert(res.data.message);
    } catch (e) {
      console.log(e);
    } finally {
      history.push("/");
    }
  };

  return (
    <STr>
      <STd>{user.name}</STd>
      <STd>{user.email}</STd>
      <STd>{user.age}</STd>
      <STd>{user.telephone}</STd>
      <DeleteButton onClick={() => onClickDelete(user.id)}>削除</DeleteButton>
    </STr>
  );
});

const STr = styled.tr`
  display: flex;
  justify-content: center;
  align-items: end;
`;

const STd = styled.td`
  text-align: left;
  width: 185px;
  display: inline-block;
  margin: 0 20px 15px 0;
`;
