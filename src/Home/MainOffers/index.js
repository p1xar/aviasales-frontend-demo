import React from 'react';
import styled from 'styled-components';
import HomeWrapper from '../HomeWrapper'; 

const MainWrapper = styled.div`
    background: linear-gradient(163.59deg, #00B0DE 0%, #196EBD 100%);
`;
const MainOfferTitle = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 1.875rem;
    line-height: 2.625rem;
    text-align: left;
    color: #FFFFFF;
    align-self: flex-start;
`;
export default () => {
    return (
        <MainWrapper>
            <HomeWrapper>
                <MainOfferTitle>Спецпредложения на авиабилеты</MainOfferTitle>
            </HomeWrapper>
        </MainWrapper>   
    )
}