import React from 'react';
import styled from 'styled-components';
import HomeWrapper from '../HomeWrapper';
import calendar from './calendar.svg';

import russia from '../Flags/russia.svg';
import armenia from '../Flags/armenia.svg';
import moldavia from '../Flags/moldavia.svg';

const Calendar = styled.img`
    margin-top: 4.75rem;
`;

const BestPricesHeader = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 2.25rem;
`;

const BestPricesWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
`;

const BestPricesColumn = styled.div`
    display: flex;
    flex-direction: column;
    width: 19.75rem;
    &:not(:last-child) {
        border-right: 0.1rem dashed #E8EDF1;
        padding-right: 2.125rem;
        margin-right: 2.125rem;
    }
`;

const ColumnTitleWrapper = styled.div`
    display: flex;
    flex-direction: row;
`;

const Flag = styled.img `
    margin-left: -0.5rem;
`;

const DestinationTitle = styled.div`
    display: flex;
    flex-direction: column;
`;

const DestinationCity = styled.p`
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 32px;
    color: #5B5B5C;
    margin-top: 2rem;
    margin-bottom: 0rem;
`;

const DestinationCountry = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 20px;
    color: #A0B0B9;
    text-transform: uppercase;
    margin-bottom: 2rem;
    margin-top: 0rem;
`;

const DepartureList = styled.div`
    display: flex;
    flex-direction: column;
`;

const DepartureItem = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

const DepartureTitle = styled.p`
    font-style: normal;
    font-weight: normal;
    font-size: 1rem;
    line-height: 1.25rem;
    flex: 3;
    color: #4A4A4A;
`;

const DeparturePrice = styled.a`
    text-decoration: none;
    font-style: normal;
    font-weight: normal;
    font-size: 1rem;
    line-height: 1.25rem;
    color: #00BAE8;
`;
export default () => {
    return (
        <HomeWrapper>
            <Calendar alt="Календарь" src={calendar} />
            <BestPricesHeader>Лучшие цены на авиабилеты за последний месяц</BestPricesHeader>
            <BestPricesWrapper>
                <BestPricesColumn>
                    <ColumnTitleWrapper>
                        <Flag alt="Россия" src={russia} />
                        <DestinationTitle>
                            <DestinationCity>Cимферополь (Крым)</DestinationCity>
                            <DestinationCountry>Крым</DestinationCountry>
                        </DestinationTitle>
                    </ColumnTitleWrapper>
                    <DepartureList>
                        <DepartureItem>
                            <DepartureTitle>Из Москвы</DepartureTitle>
                            <DeparturePrice href="#">от 4 813 ₽</DeparturePrice>
                        </DepartureItem>
                        <DepartureItem>
                            <DepartureTitle>Из Санкт-Петербурга</DepartureTitle>
                            <DeparturePrice href="#">от 7 857 ₽</DeparturePrice>
                        </DepartureItem>
                        <DepartureItem>
                            <DepartureTitle>Из Новосибирска</DepartureTitle>
                            <DeparturePrice href="#">от 15 127 ₽</DeparturePrice>
                        </DepartureItem>
                        <DepartureItem>
                            <DepartureTitle>Из Екатеринбурга</DepartureTitle>
                            <DeparturePrice href="#">от 9 275 ₽</DeparturePrice>
                        </DepartureItem>
                        <DepartureItem>
                            <DepartureTitle>Из Челябинска</DepartureTitle>
                            <DeparturePrice href="#">от 9 148 ₽</DeparturePrice>
                        </DepartureItem>
                    </DepartureList>
                </BestPricesColumn>
                <BestPricesColumn>
                    <ColumnTitleWrapper>
                        <Flag alt="Армения" src={armenia} />
                        <DestinationTitle>
                            <DestinationCity>Ереван</DestinationCity>
                            <DestinationCountry>Армения</DestinationCountry>
                        </DestinationTitle>
                    </ColumnTitleWrapper>
                    <DepartureList>
                        <DepartureItem>
                            <DepartureTitle>Из Москвы</DepartureTitle>
                            <DeparturePrice href="#">от 6 758 ₽</DeparturePrice>
                        </DepartureItem>
                        <DepartureItem>
                            <DepartureTitle>Из Санкт-Петербурга</DepartureTitle>
                            <DeparturePrice href="#">от 9 932 ₽</DeparturePrice>
                        </DepartureItem>
                        <DepartureItem>
                            <DepartureTitle>Из Сочи</DepartureTitle>
                            <DeparturePrice href="#">от 11 951 ₽</DeparturePrice>
                        </DepartureItem>
                        <DepartureItem>
                            <DepartureTitle>Из Краснодара</DepartureTitle>
                            <DeparturePrice href="#">от 11 741 ₽</DeparturePrice>
                        </DepartureItem>
                        <DepartureItem>
                            <DepartureTitle>Из Ростова-на-Дону</DepartureTitle>
                            <DeparturePrice href="#">от 11 956 ₽</DeparturePrice>
                        </DepartureItem>
                    </DepartureList>
                </BestPricesColumn>
                <BestPricesColumn>
                    <ColumnTitleWrapper>
                        <Flag alt="Молдавия" src={moldavia} />
                        <DestinationTitle>
                            <DestinationCity>Кишинёв</DestinationCity>
                            <DestinationCountry>Молдавия</DestinationCountry>
                        </DestinationTitle>
                    </ColumnTitleWrapper>
                    <DepartureList>
                        <DepartureItem>
                            <DepartureTitle>Из Москвы</DepartureTitle>
                            <DeparturePrice href="#">от 8 319 ₽</DeparturePrice>
                        </DepartureItem>
                        <DepartureItem>
                            <DepartureTitle>Из Санкт-Петербурга</DepartureTitle>
                            <DeparturePrice href="#">от 10 800 ₽</DeparturePrice>
                        </DepartureItem>
                        <DepartureItem>
                            <DepartureTitle>Из Краснодара</DepartureTitle>
                            <DeparturePrice href="#">от 12 098 ₽</DeparturePrice>
                        </DepartureItem>
                        <DepartureItem>
                            <DepartureTitle>Из Сургута</DepartureTitle>
                            <DeparturePrice href="#">от 16 277 ₽</DeparturePrice>
                        </DepartureItem>
                        <DepartureItem>
                            <DepartureTitle>Из Нового Уренгоя</DepartureTitle>
                            <DeparturePrice href="#">от 15 987 ₽</DeparturePrice>
                        </DepartureItem>
                    </DepartureList>
                </BestPricesColumn>
            </BestPricesWrapper>
        </HomeWrapper>
    );
}