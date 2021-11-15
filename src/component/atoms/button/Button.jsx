import styled from "styled-components";

import { BaseButton } from "./BaseButton"

export const Button = (props) => {
    const { children } = props;
    return (
    <SButton>{ children }</SButton>
    )
}

const SButton = styled(BaseButton)`
background: #cc0033;
color: #fff;
`
