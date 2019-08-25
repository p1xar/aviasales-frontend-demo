import React from 'react';
import styled from 'styled-components';
import HomeWrapper from '../HomeWrapper'; 
import icon from './icon.png';
import pobeda from './pobeda.png';
import lufthansa from './lufthansa.png';

const CustomHomeWrapper = styled(HomeWrapper)`
    background: linear-gradient(163.59deg, #00B0DE 0%, #196EBD 100%);
    max-width: 100%;
`;

const MainWrapper = styled.div`
    width: 65rem;
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

const MainOfferColumns = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

const Column = styled.div`
    width: 18.625rem;
    height: 16.875rem;
    background: #fff;
`;

const ColumnHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 3.9375rem;
    background: #CD2027;
    padding-left: 1rem;
    padding-right: 1rem;
`;

const HeaderTitle = styled.p`
    font-style: normal;
    font-weight: normal;
    font-size: 0.9rem;
    line-height: 1.25rem;
    color: #fff;
`;

const HeaderIcon = styled.img`
    width: 2.375rem;
    height: 2.375rem;
`;
const ColumnDescription = styled.div`
    display: flex;
    flex-direction: column;
`;

const ColumnItems = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-left: 1rem;
    padding-right: 1rem;
`;

const PartnerIcon = styled.img`
    width: 7.5rem;
    height: 1.875rem;
`;

const ColumnItem = styled.div`
    display: flex;
    flex-direction: column;
`;

const PriceFrom = styled.p`
    font-style: normal;
    font-weight: normal;
    font-size: 1.25rem;
    color: #5C5C5C;
`;

const DaysLeft = styled.p`
    font-style: normal;
    font-weight: normal;
    font-size: 0.75rem;
    color: #D93633;
    margin-top: -1rem;
`;

const MainOfferDescription = styled.p`
    font-style: normal;
    font-weight: normal;
    font-size: 0.75rem;
    line-height: 1rem;
    color: #242424;
    margin-left: 0.5rem;
    margin-right: 0.5rem;  
`;

const MainOfferReadMore = styled.a`
    padding: 0.625rem 3.5rem;
    border: 0.125rem solid #CD1F27;
    border-radius: 0.1875rem;
    align-self: center;
    margin-bottom: 1.5rem;
    margin-top: 1.5rem;
    text-decoration: none;
    color: #D93533;
`;
export default () => {
    return (
        <CustomHomeWrapper>
            <MainWrapper>
                <MainOfferTitle>Спецпредложения на авиабилеты</MainOfferTitle>
                <MainOfferColumns>
                    <Column>
                        <ColumnHeader>
                            <HeaderTitle>Билеты от 499 рублей</HeaderTitle>
                        </ColumnHeader>
                        <ColumnDescription>
                            <ColumnItems>
                                <PartnerIcon alt="Pobeda" src={pobeda}></PartnerIcon>
                                <ColumnItem>
                                    <PriceFrom>от 499 ₽</PriceFrom>
                                    <DaysLeft>Осталось 45 дней</DaysLeft>
                                </ColumnItem>
                            </ColumnItems>
                            <MainOfferDescription>
                                Билеты от 499 рублей! Специальное предложение от авиакомпании Победа
                            </MainOfferDescription>
                            <MainOfferReadMore href="#">Узнать подробности</MainOfferReadMore>
                        </ColumnDescription>
                    </Column>
                    <Column>
                        <ColumnHeader>
                            <HeaderTitle>В Нью-Йорк от 20680 рублей!</HeaderTitle>
                            <HeaderIcon alt="Partner" src={icon} />
                        </ColumnHeader>
                        <ColumnDescription>
                            <ColumnItems>
                                <PartnerIcon alt="Lufthansa" src={lufthansa}></PartnerIcon>
                                <ColumnItem>
                                    <PriceFrom>от 20 680 ₽</PriceFrom>
                                    <DaysLeft>Осталось 19 дней</DaysLeft>
                                </ColumnItem>
                            </ColumnItems>
                            <MainOfferDescription>
                                Из Москвы в США от 20680 рублей! Специальное предложение от авиакомпании Lufthansa
                            </MainOfferDescription>
                            <MainOfferReadMore href="#">Узнать подробности</MainOfferReadMore>
                        </ColumnDescription>
                    </Column>
                    <Column>
                        <ColumnHeader>
                            <HeaderTitle>В Лос-Анджелес от 22360 рублей!</HeaderTitle>
                            <HeaderIcon alt="Partner" src={icon} />
                        </ColumnHeader>
                        <ColumnDescription>
                            <ColumnItems>
                                <PartnerIcon alt="Lufthansa" src={lufthansa}></PartnerIcon>
                                <ColumnItem>
                                    <PriceFrom>от 20 360 ₽</PriceFrom>
                                    <DaysLeft>Осталось 19 дней</DaysLeft>
                                </ColumnItem>
                            </ColumnItems>
                            <MainOfferDescription>
                                Из Москвы в США от 20680 рублей! Специальное предложение от авиакомпании Lufthansa
                            </MainOfferDescription>
                            <MainOfferReadMore href="#">Узнать подробности</MainOfferReadMore>
                        </ColumnDescription>
                    </Column>
                </MainOfferColumns>
            </MainWrapper> 
        </CustomHomeWrapper>
          
    )
}