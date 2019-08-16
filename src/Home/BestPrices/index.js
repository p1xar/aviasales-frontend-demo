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
    text-align: center;
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
    @media screen and (max-width: 20rem) {
        justify-content: center;
        width: 100%;
        border-right: none;
        margin-right: 0.375rem;
        margin-left: 0.375rem;
        padding-right: 0rem;
        &:not(:last-child) {
            border-right: none;
            margin-right: 0.375rem;
            margin-left: 0.375rem;
            padding-right: 0rem;
            padding-bottom: 1.5rem;
            border-bottom: 0.1rem dashed #E8EDF1;    
        }
    }
`;

const ColumnTitleWrapper = styled.div`
    display: flex;
    flex-direction: row;
`;

const Flag = styled.img`
    margin-left: -0.5rem;
`;

const DestinationTitle = styled.div`
    display: flex;
    flex-direction: column;
`;

const DestinationCity = styled.p`
    font-style: normal;
    font-weight: bold;
    font-size: 1.375rem;
    line-height: 2rem;
    color: #5B5B5C;
    margin-top: 2rem;
    margin-bottom: 0rem;
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

const BestPricesText = styled.p`
    margin-top: 5rem;
    font-style: normal;
    font-weight: normal;
    font-size: 1rem;
    line-height: 1.625rem;
    color: #4A4A4A;
    max-width: 40.5rem;
    text-align: center;
    @media screen and (max-width: 20rem) {
        
    }
`;

const BestPricesDescription = styled(BestPricesText)`
    font-size: 0.875rem;
    line-height: 1.25rem;
    color: #A0B0B9;
    margin-top: 0;
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
            <BestPricesText>
                Мы знаем, где купить авиабилеты дешево. Билеты на самолет в 220 стран мира. Поиск и сравнение цен на авиабилеты среди 100 агентств и 728 авиакомпаний.
            </BestPricesText>
            <BestPricesDescription>
                Цены, найденные пользователями за последние 48 часов, не являются офертой.
            </BestPricesDescription>
        </HomeWrapper>
    );
}