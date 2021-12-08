import React, { memo } from "react";
import styled from "styled-components";

export const UserData = memo((props) => {
  const { user } = props;
  return (
    <STr>
      <STd>{user.name}</STd>
      <STd>{user.email}</STd>
      <STd>{user.age}</STd>
      <STd>{user.telephone}</STd>
    </STr>
  );
});

const STr = styled.tr`
  display: flex;
  justify-content: center;
`;

const STd = styled.td`
  text-align: left;
  width: 185px;
  display: inline-block;
  margin: 0 20px 15px 0;
`;
