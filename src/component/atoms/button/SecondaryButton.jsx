import styled from "styled-components";

import { BaseButton } from "./BaseButton"

export const SecondaryButton = (props) => {
    const { children } = props;
    return (
    <SButton>{ children }</SButton>
    )
}

const SButton = styled(BaseButton)`
background: #fff100;
color: #333;
margin-right: 20px;
`
