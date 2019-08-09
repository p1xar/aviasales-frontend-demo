import React from 'react';
import styled from 'styled-components';

import compas from './compas.svg';
import edit from './edit.svg';
import globe from './globe.svg';
import palm from './palm.svg';
import shop from './shop.svg';
import cult from './cult.svg';
import night from './night.svg';
import kids from './kids.svg';

const HomeWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #F8FCFF;
`;
    
const SectionIcon = styled.img`
    margin-top: 3.5rem;
`;

const HeaderPopular = styled.div`
    margin-top: 1.25rem;
    text-align: center;
`;
const PopularTitle = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 0;
    color: #4A4A4A;
    display: inline;
    margin-right: 0.4rem;
`;

const PopularTitleChangeble = styled(PopularTitle)`
    color: #00ACE2;
    margin-right: 0.75rem;
`;

const TravelList = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

const TravelItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    &:not(:last-child) {
        margin-right: 3.5rem;
    }
`;

const TravelItemTitle = styled.a`
    font-size: 1rem;
    line-height: 1.5rem;
    font-style: normal;
    font-weight: 300;
    color: #00ACE2;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    margin-top: 8rem;
`;

const TravelIconContainer = styled.div`
    width: 3rem;
    height: 3rem;
    position: absolute;
    box-shadow: 0px 0.25rem 1 rgba(74, 74, 74, 0.12);
    border-radius: 50%;
    background: #FFFFFF;
`;

const TravelIcon = styled.img`
    position: absolute;
    left: 0.8125rem;
    top: 0.8125rem;
`;
export default () => {
    return (
        <HomeWrapper>
            <SectionIcon alt="Compas" src={compas} />
            <HeaderPopular>
                <PopularTitle>
                    Популярные направления перелетов<p></p>из города  
                </PopularTitle>
                <PopularTitleChangeble>Москва</PopularTitleChangeble>
                <img alt="Edit" src={edit} />
            </HeaderPopular>
            <TravelList>
                <TravelItem>
                    <TravelIconContainer>
                        <TravelIcon alt="Globe" src={globe}/>
                    </TravelIconContainer>
                    <TravelItemTitle href="#">Куда<br />угодно</TravelItemTitle>  
                </TravelItem>
                <TravelItem>
                    <TravelIconContainer>
                        <TravelIcon alt="Palm" src={palm}/>
                    </TravelIconContainer>
                    <TravelItemTitle>Солнце<br />и море</TravelItemTitle>  
                </TravelItem>
                <TravelItem>
                    <TravelIconContainer>
                        <TravelIcon alt="Shop" src={shop}/>
                    </TravelIconContainer>
                    <TravelItemTitle>Шопинг, <br />город</TravelItemTitle>  
                </TravelItem>
                <TravelItem>
                    <TravelIconContainer>
                        <TravelIcon alt="Culture" src={cult}/>
                    </TravelIconContainer>
                    <TravelItemTitle>культура<br />и история</TravelItemTitle>  
                </TravelItem>
                <TravelItem>
                    <TravelIconContainer>
                        <TravelIcon alt="Night" src={night}/>
                    </TravelIconContainer>
                    <TravelItemTitle>Ночная<br />жизнь</TravelItemTitle>  
                </TravelItem>
                <TravelItem>
                    <TravelIconContainer>
                        <TravelIcon alt="Kids" src={kids}/>
                    </TravelIconContainer>
                    <TravelItemTitle>Отдых<br />с детьми</TravelItemTitle>  
                </TravelItem>
            </TravelList>       
        </HomeWrapper>    
    )
}