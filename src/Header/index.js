import React from 'react';
import styled from 'styled-components';
import logo from './logo.svg'

const Header = styled.div`
    background: linear-gradient(151.09deg, #00B0DE 0.36%, #01AEDC 4.04%, #02ABDB 7.77%, #02ABDB 11.48%, #02ABDB 11.7%, #196EBD 100%);
`;

const Logo = styled.img`
    width: 30px;
    height: 29px;
    padding-left: 6.625rem;
    padding-top: 1.1875rem;
    @media screen and (max-width: 768px) {
        padding-left: 8px;
    }
`;
const LogoText = styled.p`
    display: none;
    @media screen and (min-width: 48rem) {
        display: block;
        font-style: normal;
        font-weight: 300;
        font-size: 20px;
        position: absolute;
        left: 152px;
        top: 0px;
        line-height: 25px;
        color: #fff;
    }
    
`;
export default () => {
    return (
        <Header>
            <Logo alt='Logo' src={logo} />
            <LogoText>
                    aviasales
            </LogoText>
        </Header>
    )
}