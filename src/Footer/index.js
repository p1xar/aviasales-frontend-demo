import React from "react";
import styled from "styled-components";
import HomeWrapper from "../Home/HomeWrapper";

const CustomHomeWrapper = styled(HomeWrapper)`
  align-items: initial;
  @media screen and (min-width: 1024px) {
    align-items: center;
  }
`;
const FooterLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media screen and (min-width: 320px) and (max-width: 768px) {
    justify-content: space-evenly;
  }
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 9rem;
  @media screen and (max-width: 640px) {
    &:nth-child(n + 3) {
      margin-top: 2rem;
    }
  }
  @media screen and (min-width: 640px) and (max-width: 768px) {
    &:nth-child(n + 7) {
      margin-top: 2rem;
    }
  }
  @media screen and (min-width: 769px) and (max-width: 910px) {
    &:last-child {
      margin-top: 2rem;
    }
  }
`;

const FooterColumnBreak = styled.div`
  display: none;
  flex-basis: 100%;
  @media screen and (max-width: 640px) {
    display: flex;
  }
  @media screen and (max-width: 768px) {
    &:nth-child(6) {
      display: flex;
    }
  }
`;
const FooterTitle = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 0.75rem;
  line-height: 1rem;
  text-transform: uppercase;
`;

const FooterLink = styled.a`
  font-style: normal;
  font-weight: normal;
  font-size: 0.75rem;
  line-height: 1rem;
  text-decoration: none;
  color: #5b5b5c;
  margin-top: 0.75rem;
`;

const FooterLinkMore = styled(FooterLink)`
  font-weight: 500;
  margin-top: 1rem;
  color: ##4a4a4a;
`;

const Divider = styled.hr`
  border: 1px solid #e0e6e8;
  width: 100%;
  margin-top: 1.8125rem;
  margin-bottom: 2.5rem;
`;

const SecondFooterWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const SecondFooterColumn = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export default () => {
  return (
    <CustomHomeWrapper>
      <FooterLinks>
        <FooterColumn>
          <FooterTitle>Страны</FooterTitle>
          <FooterLink href="#">Россия</FooterLink>
          <FooterLink href="#">Таиланд</FooterLink>
          <FooterLink href="#">Черногория</FooterLink>
          <FooterLink href="#">Кипр</FooterLink>
          <FooterLink href="#">Болгария</FooterLink>
          <FooterLink href="#">Грузия</FooterLink>
          <FooterLinkMore href="#">Все страны →</FooterLinkMore>
        </FooterColumn>
        <FooterColumn>
          <FooterTitle>Города</FooterTitle>
          <FooterLink href="#">Москва</FooterLink>
          <FooterLink href="#">Санкт-Петербург</FooterLink>
          <FooterLink href="#">Симферополь</FooterLink>
          <FooterLink href="#">Адлер</FooterLink>
          <FooterLink href="#">Екатеринбург</FooterLink>
          <FooterLink href="#">Лондон</FooterLink>
          <FooterLinkMore href="#">Все города →</FooterLinkMore>
        </FooterColumn>
        <FooterColumnBreak />
        <FooterColumn>
          <FooterTitle>Авиакомпании</FooterTitle>
          <FooterLink href="#">AirBerlin</FooterLink>
          <FooterLink href="#">Air France</FooterLink>
          <FooterLink href="#">Alitalia</FooterLink>
          <FooterLink href="#">Air Baltic</FooterLink>
          <FooterLink href="#">Emirates</FooterLink>
          <FooterLink href="#">KLM</FooterLink>
          <FooterLinkMore href="#">Все авиакомпании →</FooterLinkMore>
        </FooterColumn>
        <FooterColumn>
          <FooterTitle>АЭРОПОРТЫ</FooterTitle>
          <FooterLink href="#">Шереметьево</FooterLink>
          <FooterLink href="#">Курумоч</FooterLink>
          <FooterLink href="#">Домодедово</FooterLink>
          <FooterLink href="#">Толмачево</FooterLink>
          <FooterLink href="#">Владивосток</FooterLink>
          <FooterLink href="#">Гамбург</FooterLink>
          <FooterLinkMore href="#">Все аэропорты →</FooterLinkMore>
        </FooterColumn>
        <FooterColumnBreak />
        <FooterColumn>
          <FooterTitle>НАПРАВЛЕНИЯ</FooterTitle>
          <FooterLink href="#">MOW – SIP</FooterLink>
          <FooterLink href="#">MOW – AER</FooterLink>
          <FooterLink href="#">MOW – TIV</FooterLink>
          <FooterLink href="#">MOW – MRV</FooterLink>
          <FooterLink href="#">LED – MOW</FooterLink>
          <FooterLink href="#">MOW – BKK</FooterLink>
        </FooterColumn>
        <FooterColumn>
          <FooterTitle>СЕРВИСЫ</FooterTitle>
          <FooterLink href="#">Горящие авиабилеты</FooterLink>
          <FooterLink href="#">Календарь низких цен</FooterLink>
          <FooterLink href="#">Карта низких цен</FooterLink>
          <FooterLink href="#">Спецпредложения</FooterLink>
          <FooterLink href="#">Таблица цен</FooterLink>
          <FooterLink href="#">Блог</FooterLink>
          <FooterLink href="#">Помощь</FooterLink>
        </FooterColumn>
      </FooterLinks>
      <Divider />
      <SecondFooterWrapper>
        <SecondFooterColumn></SecondFooterColumn>
      </SecondFooterWrapper>
    </CustomHomeWrapper>
  );
};
