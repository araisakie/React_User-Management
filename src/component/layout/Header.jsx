import { Link } from "react-router-dom";
import styled from 'styled-components';

export const Header = () =>{
    return(
        <SHeader>
            <SLink to="/">HOME</SLink>
            <SLink to="/user">SIGNUP</SLink>
        </SHeader>
    )
}

const SHeader = styled.header`
background: -moz-linear-gradient(top, #FFC778, #FFFFCC);
background: -webkit-linear-gradient(top, #FFC778, #FFFFCC);
background: linear-gradient(to bottom, #FFC778, #FFFFCC);
text-align: right;
padding: 30px 50px;
`

const SLink = styled(Link)`
text-decoration: none;
margin: 0 8px;
color: #fff;
font-weight: bold;
font-size: 25px;
text-shadow: 4px 3px 3px #FF4F02; 
`

