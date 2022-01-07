import styled from "styled-components";

import { BaseButton } from "./BaseButton";

export const DeleteButton = (props) => {
  const { children, onClick } = props;
  return <SButton onClick={onClick}>{children}</SButton>;
};

const SButton = styled(BaseButton)`
  background: #fff100;
  color: #333;
  margin: 0 0 10px 0;
  width: 100px;
`;
