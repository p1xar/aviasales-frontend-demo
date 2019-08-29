import React from "react";
import styled from "styled-components";
import HomeWrapper from "../HomeWrapper";
import icon from "./icon.png";
import pobeda from "./pobeda.png";
import lufthansa from "./lufthansa.png";

const CustomHomeWrapper = styled(HomeWrapper)`
  background: linear-gradient(163.59deg, #00b0de 0%, #196ebd 100%);
  max-width: 100%;
`;

const MainWrapper = styled.div`
  width: 65rem;
  @media screen and (max-width: 65.625rem) {
    width: 100%;
  }
`;

const MainOfferTitle = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 1.875rem;
  line-height: 2.625rem;
  text-align: left;
  color: #ffffff;
  align-self: flex-start;
  @media screen and (max-width: 65.625rem) {
    margin-left: 1rem;
  }
`;

const MainOfferColumns = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  @media screen and (min-width: 20rem) and (max-width: 48rem) {
    flex-direction: column;
  }
  @media screen and (min-width: 48.01rem) and (max-width: 65.625rem) {
    justify-content: center;
  }
`;

const Column = styled.div`
  width: 18.625rem;
  height: 16.875rem;
  background: #fff;
  @media screen and (max-width: 48rem) {
    margin-top: 1rem;
  }
  @media screen and (min-width: 48.01rem) and (max-width: 65.625rem) {
    &:not(:last-child) {
      margin-right: 1rem;
    }
    width: 15rem;
    height: 18rem;
  }
`;

const ColumnHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 3.9375rem;
  background: #cd2027;
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
  @media screen and (min-width: 48.01rem) and (max-width: 65.625rem) {
    padding-left: 0.3rem;
    padding-right: 0.3rem;
  }
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
  color: #5c5c5c;
`;

const DaysLeft = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 0.75rem;
  color: #d93633;
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
  @media screen and (min-width: 48.01rem) and (max-width: 65.625rem) {
    font-size: 0.8rem;
  }
`;

const MainOfferReadMore = styled.a`
  padding: 0.625rem 3.5rem;
  border: 0.125rem solid #cd1f27;
  border-radius: 0.1875rem;
  align-self: center;
  margin-bottom: 1.5rem;
  margin-top: 1.5rem;
  text-decoration: none;
  color: #d93533;
  @media screen and (min-width: 48.01rem) and (max-width: 65.625rem) {
    padding: 0.625rem 2rem;
  }
`;

const MainOfferFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  @media screen and (min-width: 48.01rem) and (max-width: 65.625rem) {
    justify-content: space-evenly;
  }
  @media screen and (min-width: 20rem) and (max-width: 48rem) {
    flex-direction: column;
  }
`;

const MainOfferAllOffers = styled.a`
  font-style: normal;
  font-weight: normal;
  font-size: 1rem;
  line-height: 1.25rem;
  color: #fff;
`;

const MainOfferAvgInfo = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 1rem;
  line-height: 1.25rem;
  color: #fff;
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
                Билеты от 499 рублей! Специальное предложение от авиакомпании
                Победа
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
                Из Москвы в США от 20680 рублей! Специальное предложение от
                авиакомпании Lufthansa
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
                Из Москвы в США от 20680 рублей! Специальное предложение от
                авиакомпании Lufthansa
              </MainOfferDescription>
              <MainOfferReadMore href="#">Узнать подробности</MainOfferReadMore>
            </ColumnDescription>
          </Column>
        </MainOfferColumns>
        <MainOfferFooter>
          <MainOfferAllOffers href="#">
            Смотреть все спецпредложения
          </MainOfferAllOffers>
          <MainOfferAvgInfo>* средняя цена по направлению</MainOfferAvgInfo>
        </MainOfferFooter>
      </MainWrapper>
    </CustomHomeWrapper>
  );
};
