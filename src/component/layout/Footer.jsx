import styled from 'styled-components';

export const Footer = () =>{
    return(
        <SFooter>
            &copy; 2021 SAKIE ARAI Inc.
        </SFooter>
    )
}

const SFooter = styled.footer`
background: -moz-linear-gradient(top, #FFFFCC, #FFC778);
background: -webkit-linear-gradient(top, #FFFFCC, #FFC778);
background: linear-gradient(to bottom, #FFFFCC, #FFC778);
padding: 30px 0;
text-align: center;
color: #FF4F02;
font-weight: bold;
position: fixed;
bottom: 0;
width: 100%;
`


