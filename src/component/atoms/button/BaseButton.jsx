import styled from "styled-components";
import React from "react";

export const BaseButton = styled.button`
  width: 150px;
  margin-top: 25px;
  padding: 3px 20px;
  border: none;
  outline: none;
  border-radius: 3px;
  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;

const CancelButton = styled(BaseButton)`
  background: #cc0033;
  color: #fff;
`;

const SaveButton = styled(BaseButton)`
  background: #fff100;
  color: #333;
  margin-right: 20px;
`;

const buttonStyleLists = {
  default: BaseButton,
  cancel: CancelButton,
  save: SaveButton,
};

export const Button = (props) => {
  const { styleType, onClick, children } = props;
  const Component = buttonStyleLists[styleType] || buttonStyleLists.default;
  return <Component onClick={onClick}>{children}</Component>;
};
