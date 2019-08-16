import React from 'react';
import styled from 'styled-components';
import HomeWrapper from '../HomeWrapper';

const Title = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 2rem;
    line-height: 2.5rem;
    margin-top: 6.0625rem;
`;

const AgenciesWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

const Agency = styled.img`

`;
export default () => {
    return(
        <HomeWrapper>
            <Title>Дешевые авиабилеты от крупнейших авиакомпаний и агентств</Title>
            <AgenciesWrapper>
                <Agency alt="Aeroflot" src={aeroflot} />
                <Agency alt="S7" src={s7} />
                <Agency alt="OneTwoTrip" src={onetwotrip} />
                <Agency alt="KoreanAir" src={koreanair} />
                <Agency alt="Elvaline" src={elvaline} />
            </AgenciesWrapper>
        </HomeWrapper>
    )
}