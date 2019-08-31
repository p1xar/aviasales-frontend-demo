import React from "react";
import styled from "styled-components";
import HomeWrapper from "../Home/HomeWrapper";
import SecondSection from "./SecondSection";
import FooterLink from "./FooterLink";
const CustomHomeWrapper = styled(HomeWrapper)`
  align-items: initial;
  @media screen and (min-width: 1280px) {
    max-width: 71.75rem;
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

export default () => {
  return (
    <CustomHomeWrapper>
      <FooterLinks>
        <FooterColumn>
          <FooterTitle>Страны</FooterTitle>
          <FooterLink href="#" top="0.75rem">
            Россия
          </FooterLink>
          <FooterLink href="#" top="0.75rem">
            Таиланд
          </FooterLink>
          <FooterLink href="#" top="0.75rem">
            Черногория
          </FooterLink>
          <FooterLink href="#" top="0.75rem">
            Кипр
          </FooterLink>
          <FooterLink href="#" top="0.75rem">
            Болгария
          </FooterLink>
          <FooterLink href="#" top="0.75rem">
            Грузия
          </FooterLink>
          <FooterLinkMore href="#" top="0.75rem">
            Все страны →
          </FooterLinkMore>
        </FooterColumn>
        <FooterColumn>
          <FooterTitle>Города</FooterTitle>
          <FooterLink href="#" top="0.75rem">
            Москва
          </FooterLink>
          <FooterLink href="#" top="0.75rem">
            Санкт-Петербург
          </FooterLink>
          <FooterLink href="#" top="0.75rem">
            Симферополь
          </FooterLink>
          <FooterLink href="#" top="0.75rem">
            Адлер
          </FooterLink>
          <FooterLink href="#" top="0.75rem">
            Екатеринбург
          </FooterLink>
          <FooterLink href="#" top="0.75rem">
            Лондон
          </FooterLink>
          <FooterLinkMore href="#">Все города →</FooterLinkMore>
        </FooterColumn>
        <FooterColumnBreak />
        <FooterColumn>
          <FooterTitle>Авиакомпании</FooterTitle>
          <FooterLink href="#" top="0.75rem">
            AirBerlin
          </FooterLink>
          <FooterLink href="#" top="0.75rem">
            Air France
          </FooterLink>
          <FooterLink href="#" top="0.75rem">
            Alitalia
          </FooterLink>
          <FooterLink href="#" top="0.75rem">
            Air Baltic
          </FooterLink>
          <FooterLink href="#" top="0.75rem">
            Emirates
          </FooterLink>
          <FooterLink href="#" top="0.75rem">
            KLM
          </FooterLink>
          <FooterLinkMore href="#" top="0.75rem">
            Все авиакомпании →
          </FooterLinkMore>
        </FooterColumn>
        <FooterColumn>
          <FooterTitle>АЭРОПОРТЫ</FooterTitle>
          <FooterLink href="#" top="0.75rem">
            Шереметьево
          </FooterLink>
          <FooterLink href="#" top="0.75rem">
            Курумоч
          </FooterLink>
          <FooterLink href="#" top="0.75rem">
            Домодедово
          </FooterLink>
          <FooterLink href="#" top="0.75rem">
            Толмачево
          </FooterLink>
          <FooterLink href="#" top="0.75rem">
            Владивосток
          </FooterLink>
          <FooterLink href="#" top="0.75rem">
            Гамбург
          </FooterLink>
          <FooterLinkMore href="#" top="0.75rem">
            Все аэропорты →
          </FooterLinkMore>
        </FooterColumn>
        <FooterColumnBreak />
        <FooterColumn>
          <FooterTitle>НАПРАВЛЕНИЯ</FooterTitle>
          <FooterLink href="#" top="0.75rem">
            MOW – SIP
          </FooterLink>
          <FooterLink href="#" top="0.75rem">
            MOW – AER
          </FooterLink>
          <FooterLink href="#" top="0.75rem">
            MOW – TIV
          </FooterLink>
          <FooterLink href="#" top="0.75rem">
            MOW – MRV
          </FooterLink>
          <FooterLink href="#" top="0.75rem">
            LED – MOW
          </FooterLink>
          <FooterLink href="#" top="0.75rem">
            MOW – BKK
          </FooterLink>
        </FooterColumn>
        <FooterColumn>
          <FooterTitle>СЕРВИСЫ</FooterTitle>
          <FooterLink href="#" top="0.75rem">
            Горящие авиабилеты
          </FooterLink>
          <FooterLink href="#" top="0.75rem">
            Календарь низких цен
          </FooterLink>
          <FooterLink href="#" top="0.75rem">
            Карта низких цен
          </FooterLink>
          <FooterLink href="#" top="0.75rem">
            Спецпредложения
          </FooterLink>
          <FooterLink href="#" top="0.75rem">
            Таблица цен
          </FooterLink>
          <FooterLink href="#" top="0.75rem">
            Блог
          </FooterLink>
          <FooterLink href="#" top="0.75rem">
            Помощь
          </FooterLink>
        </FooterColumn>
      </FooterLinks>
      <Divider />
      <FooterLinks>
        <SecondSection />
      </FooterLinks>
    </CustomHomeWrapper>
  );
};
