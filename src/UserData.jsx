import React, { memo } from "react";
import styled from "styled-components";

export const UserData = memo((props) => {
  const { user } = props;
  return (
    <SDl>
      <dd>{user.name}</dd>
      <dd>{user.email}</dd>
      <dd>{user.age}</dd>
      <dd>{user.telephone}</dd>
    </SDl>
  );
});

const SDl = styled.dl`
  display: flex;
  justify-content: center;
`;
