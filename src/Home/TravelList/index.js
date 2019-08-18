import React from 'react';
import styled from 'styled-components';
import HomeWrapper from '../HomeWrapper';
import barcelona from './barcelona.jpg';
import compas from './compas.svg';
import crimea from './crimea.jpg';
import cult from './cult.svg';
import edit from './edit.svg';
import globe from './globe.svg';
import kids from './kids.svg';
import krasnodar from './krasnodar.jpg';
import mineralwaters from './mineralwaters.jpg';
import night from './night.svg';
import palm from './palm.svg';
import russia from '../Flags/russia.svg';
import spain from '../Flags/spain.svg';
import saintp from './saintp.jpg';
import shop from './shop.svg';
import sochi from './sochi.jpg';

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
    line-height: 2.25rem;
    color: #4A4A4A;
    display: inline;
    margin-right: 0.4rem;
    @media screen and (max-width: 20rem) {
        font-size: 1.125rem;
        line-height: 1.5rem;
        padding-left: 0.2rem;
        padding-right: 0.2rem;
    }
`;

const PopularTitleChangeble = styled(PopularTitle)`
    color: #00ACE2;
    margin-right: 0.75rem;
`;

const TravelList = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
`;

const TravelItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    &:not(:last-child) {
        margin-right: 3.5rem;
    }
    @media screen and (max-width: 20rem) {
        &:not(:last-child) {
            margin: 0;
        }   
        max-width: calc(33.333%);
        flex: 1 0 calc(33.333%);
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
    position: relative;
    &:before {
        content: "";
        position: absolute;
        width: 100%;
        height: 0.125rem;
        bottom: 0;
        left: 0;
        background: #00ACE2;
        visibility: hidden;
        border-radius: 0.3125rem;
        transform: scaleX(0);
        transition: .25s linear;
    }
    &:hover {
        color: #5C5C5C;
    }
    &:hover:before {
        visibility: visible;
        transform: scaleX(1);
    }
    &:focus:before {
        visibility: visible;
        transform: scaleX(1);
    }
`;

const TravelIconContainer = styled.div`
    width: 3rem;
    height: 3rem;
    position: absolute;
    box-shadow: 0 0.25rem 1rem rgba(74, 74, 74, 0.12);
    border-radius: 50%;
    background: #FFFFFF;
`;

const TravelIcon = styled.img`
    position: absolute;
    left: 0.8125rem;
    top: 0.8125rem;
`;

const TopDestinationsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 3.4375rem;
`;

const TopDestinationCard = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 0.5rem;
    background: #FFFFFF;
    box-shadow: 0 0.125rem 0.75rem rgba(0, 75, 93, 0.12);
    margin-bottom: 1.9375rem;
    &:nth-child(odd) {
        margin-right: 0.95875rem;
    }
    @media screen and (max-width: 20rem) {
        &:nth-child(odd) {
            margin-right: 0rem;
        } 
    }
`;

const TopDestinationImage = styled.img`
    max-width: 100%;
    max-height: 13.25rem;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    @media screen and (max-width: 20rem) {
        max-width: 19.25rem;
    }
`;
const TopDestinationCaption = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    max-height: 5.125rem;
`;

const CaptionColumn = styled.div`
    display: flex;
    justify-content: space-evenly;
    max-width: 18.9375rem;
    @media screen and (max-width: 20rem) {
        max-width: 9.625rem;
    }
`;

const DestinationTitle = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
`;

const Flag = styled.img `
    margin-left: 0.75rem;
    @media screen and (max-width: 20rem) {
        display: none;
    }
`;

const DestinationCity = styled.p`
    font-style: normal;
    font-weight: bold;
    font-size: 1.375rem;
    line-height: 2rem;
    color: #5B5B5C;
    margin-top: 2rem;
    margin-bottom: 0rem;
    @media screen and (max-width: 20rem) {
        font-size: 0.9rem;
        line-height: 1.25rem;
    }
`;

const DestinationCountry = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 0.75rem;
    line-height: 1.25rem;
    color: #A0B0B9;
    text-transform: uppercase;
    margin-bottom: 2rem;
    margin-top: 0rem;
`;

const DestinationTitleReversed = styled(DestinationTitle)`
    align-items: flex-end;
    margin-right: 1.5rem;
`;

const DestinationPrices = styled.a`
    font-style: normal;
    font-weight: normal;
    font-size: 1.375rem;
    line-height: 2rem;
    color: #00BAE8;
    margin-bottom: 0;
    margin-top: 2rem;
    text-decoration: none;
    position: relative;
    &:before {
        content: "";
        position: absolute;
        width: 100%;
        height: 0.125rem;
        bottom: 0;
        left: 0;
        background: #00ACE2;
        visibility: hidden;
        border-radius: 0.3125rem;
        transform: scaleX(0);
        transition: .25s linear;
    }
    &:hover {
        color: #5C5C5C;
    }
    &:hover:before {
        visibility: visible;
        transform: scaleX(1);
    }
    &:focus:before {
        visibility: visible;
        transform: scaleX(1);
    }
    @media screen and (max-width: 20rem) {
        font-size: 0.875rem;
        line-height: 1rem;
    }
`;

const DestinationDate = styled.p`
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 0.75rem;
    line-height: 1.25rem;
    color: #A0B0B9;
    margin-bottom: 2rem;
    margin-top: 0;
`;

export default () => {
    return (
        <HomeWrapper>
            <SectionIcon alt="Compas" src={compas} />
            <HeaderPopular>
                <PopularTitle>
                    Популярные направления перелетов<br></br>из города  
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
                    <TravelItemTitle href="#">Солнце<br />и море</TravelItemTitle>  
                </TravelItem>
                <TravelItem>
                    <TravelIconContainer>
                        <TravelIcon alt="Shop" src={shop}/>
                    </TravelIconContainer>
                    <TravelItemTitle href="#">Шопинг, <br />город</TravelItemTitle>  
                </TravelItem>
                <TravelItem>
                    <TravelIconContainer>
                        <TravelIcon alt="Culture" src={cult}/>
                    </TravelIconContainer>
                    <TravelItemTitle href="#">культура<br />и история</TravelItemTitle>  
                </TravelItem>
                <TravelItem>
                    <TravelIconContainer>
                        <TravelIcon alt="Night" src={night}/>
                    </TravelIconContainer>
                    <TravelItemTitle href="#">Ночная<br />жизнь</TravelItemTitle>  
                </TravelItem>
                <TravelItem>
                    <TravelIconContainer>
                        <TravelIcon alt="Kids" src={kids}/>
                    </TravelIconContainer>
                    <TravelItemTitle href="#">Отдых<br />с детьми</TravelItemTitle>  
                </TravelItem>
            </TravelList>
            <TopDestinationsWrapper>
                <TopDestinationCard>
                    <TopDestinationImage alt="Краснодар" src={krasnodar} />
                    <TopDestinationCaption>
                        <CaptionColumn>
                            <Flag alt="Россия" src={russia} />
                            <DestinationTitle>
                                <DestinationCity>Краснодар</DestinationCity>
                                <DestinationCountry>Россия</DestinationCountry>
                            </DestinationTitle>
                        </CaptionColumn>
                        <CaptionColumn>
                            <DestinationTitleReversed>
                                <DestinationPrices href="#">Найти от 1 212 ₽</DestinationPrices>
                                <DestinationDate>18 марта</DestinationDate>
                            </DestinationTitleReversed>
                        </CaptionColumn>
                    </TopDestinationCaption>
                </TopDestinationCard>
                <TopDestinationCard>
                    <TopDestinationImage alt="Сочи (Адлер)" src={sochi} />
                    <TopDestinationCaption>
                        <CaptionColumn>
                            <Flag alt="Россия" src={russia} />
                            <DestinationTitle>
                                <DestinationCity>Сочи (Адлер)</DestinationCity>
                                <DestinationCountry>Россия</DestinationCountry>
                            </DestinationTitle>
                        </CaptionColumn>
                        <CaptionColumn>
                            <DestinationTitleReversed>
                                <DestinationPrices href="#">Найти от 1 334 ₽</DestinationPrices>
                                <DestinationDate>27 марта</DestinationDate>
                            </DestinationTitleReversed>
                        </CaptionColumn>
                    </TopDestinationCaption>
                </TopDestinationCard>
                <TopDestinationCard>
                    <TopDestinationImage alt="Санкт-Петербург" src={saintp} />
                    <TopDestinationCaption>
                        <CaptionColumn>
                            <Flag alt="Россия" src={russia} />
                            <DestinationTitle>
                                <DestinationCity>Санкт-Петербург</DestinationCity>
                                <DestinationCountry>Россия</DestinationCountry>
                            </DestinationTitle>
                        </CaptionColumn>
                        <CaptionColumn>
                            <DestinationTitleReversed>
                                <DestinationPrices href="#">Найти от 1 508 ₽</DestinationPrices>
                                <DestinationDate>19 февраля</DestinationDate>
                            </DestinationTitleReversed>
                        </CaptionColumn>
                    </TopDestinationCaption>
                </TopDestinationCard>
                <TopDestinationCard>
                    <TopDestinationImage alt="Минеральные Воды" src={mineralwaters} />
                    <TopDestinationCaption>
                        <CaptionColumn>
                            <Flag alt="Россия" src={russia} />
                            <DestinationTitle>
                                <DestinationCity>Минеральные воды</DestinationCity>
                                <DestinationCountry>Россия</DestinationCountry>
                            </DestinationTitle>
                        </CaptionColumn>
                        <CaptionColumn>
                            <DestinationTitleReversed>
                                <DestinationPrices href="#">Найти от 2 074 ₽</DestinationPrices>
                                <DestinationDate>18 марта</DestinationDate>
                            </DestinationTitleReversed>
                        </CaptionColumn>
                    </TopDestinationCaption>
                </TopDestinationCard>
                <TopDestinationCard>
                    <TopDestinationImage alt="Симферополь (Крым)" src={crimea} />
                    <TopDestinationCaption>
                        <CaptionColumn>
                            <Flag alt="Россия" src={russia} />
                            <DestinationTitle>
                                <DestinationCity>Симферополь (Крым)</DestinationCity>
                                <DestinationCountry>Россия</DestinationCountry>
                            </DestinationTitle>
                        </CaptionColumn>
                        <CaptionColumn>
                            <DestinationTitleReversed>
                                <DestinationPrices href="#">Найти от 2 407 ₽</DestinationPrices>
                                <DestinationDate>13 марта</DestinationDate>
                            </DestinationTitleReversed>
                        </CaptionColumn>
                    </TopDestinationCaption>
                </TopDestinationCard>
                <TopDestinationCard>
                    <TopDestinationImage alt="Барселона" src={barcelona} />
                    <TopDestinationCaption>
                        <CaptionColumn>
                            <Flag alt="Испания" src={spain} />
                            <DestinationTitle>
                                <DestinationCity>Барселона</DestinationCity>
                                <DestinationCountry>Испания</DestinationCountry>
                            </DestinationTitle>
                        </CaptionColumn>
                        <CaptionColumn>
                            <DestinationTitleReversed>
                                <DestinationPrices href="#">Найти от 4 247 ₽</DestinationPrices>
                                <DestinationDate>24 марта</DestinationDate>
                            </DestinationTitleReversed>
                        </CaptionColumn>
                    </TopDestinationCaption>
                </TopDestinationCard>
            </TopDestinationsWrapper>
        </HomeWrapper>    
    )
    }