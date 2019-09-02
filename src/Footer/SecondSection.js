import React from "react";
import styled from "styled-components";
import FooterLink from "./FooterLink";
import vk from "./vk.svg";
import facebook from "./facebook.svg";
import instagram from "./instagram.svg";
import twitter from "./twitter.svg";
import viber from "./viber.svg";
import ios from "./ios.svg";
import googleplay from "./googleplay.svg";
import windows from "./windows.svg";

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const Icon = styled.img`
  width: 0.8125rem;
  height: 0.8125rem;
  margin-right: 0.3rem;
`;

const FooterItemsWrapper = styled.div`
  display: flex;
  margin-top: ${props => props.top};
  align-items: center;
  align-self: ${props => props.align};
  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
  }
  @media screen and (min-width: 769px) and (max-width: 1024px) {
    &:last-child {
      align-self: flex-start;
    }
  }
`;

const CustomFooterItemsWrapper = styled(FooterItemsWrapper)`
  flex-direction: column;
  @media screen and (max-width: 768px) {
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  @media screen and (min-width: 769px) and (max-width: 1049px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const FooterItemsWrapperHideLg = styled(FooterItemsWrapper)`
  @media screen and (min-width: 1025px) {
    display: none;
  }
`;

const FooterItemsWrapperHideSm = styled(FooterItemsWrapper)`
  @media screen and (min-width: 320px) and (max-width: 1024px) {
    display: none;
  }
`;

const AppIcon = styled.img`
  width: 7.8125rem;
  height: 2.625rem;
  margin-right: ${props => props.right};
  @media screen and (max-width: 768px) {
    margin-right: 0rem;
    margin-top: 0.5rem;
  }
`;

const IconsWrapper = styled(CustomFooterItemsWrapper)`
  @media screen and (min-width: 769px) {
    flex-direction: row;
  }
  @media screen and (min-width: 320px) and (max-width: 1049px) {
    margin-top: 1rem;
  }
`;

const FooterColumnBreak = styled.div`
  display: none;
  flex-basis: 100%;
  @media screen and (min-width: 768px) and (max-width: 1049px) {
    display: flex;
  }
`;
export default () => {
  return (
    <React.Fragment>
      <Column>
        <FooterItemsWrapper>
          <FooterLink href="#" right="0.5rem">
            О компании
          </FooterLink>
          <FooterLink href="#" right="0.5rem">
            Партнёрская программа
          </FooterLink>
          <FooterLink href="#" right="0.5rem">
            Реклама
          </FooterLink>
          <FooterLink href="#" right="0.5rem">
            Вакансии
          </FooterLink>
          <FooterLink href="#" right="0.5rem">
            Помощь
          </FooterLink>
          <FooterLink href="#" right="0.5rem">
            Правила
          </FooterLink>
          <FooterLink href="#">White Label авиабилеты</FooterLink>
        </FooterItemsWrapper>
        <FooterItemsWrapper top="1rem">
          <Icon alt="Vk" src={vk} />
          <FooterLink href="#" right="1.4rem">
            Вконтакте
          </FooterLink>
          <Icon alt="Facebook" src={facebook} />
          <FooterLink href="#" right="1.4rem">
            Фейсбук
          </FooterLink>
          <Icon alt="Instagram" src={instagram} />
          <FooterLink href="#" right="1.4rem">
            Инстаграм
          </FooterLink>
          <Icon alt="Twitter" src={twitter} />
          <FooterLink href="#" right="1.4rem">
            Твиттер
          </FooterLink>
          <Icon alt="Viber" src={viber} />
          <FooterLink href="#" right="1.4rem">
            Вайбер
          </FooterLink>
        </FooterItemsWrapper>
        <FooterItemsWrapperHideSm top="2rem">
          <FooterLink href="#">Поиск и бронирование отелей</FooterLink>
        </FooterItemsWrapperHideSm>
      </Column>
      <FooterColumnBreak />
      <Column>
        <CustomFooterItemsWrapper>
          <FooterItemsWrapperHideLg top="2rem">
            <FooterLink href="#">Поиск и бронирование отелей</FooterLink>
          </FooterItemsWrapperHideLg>
          <IconsWrapper>
            <AppIcon alt="iOS donwload" src={ios} right="0.625rem" />
            <AppIcon
              alt="Google Play donwload"
              src={googleplay}
              right="0.625rem"
            />
            <AppIcon alt="Windows phone donwload" src={windows} />
          </IconsWrapper>
        </CustomFooterItemsWrapper>
        <FooterItemsWrapper align="flex-end">
          <FooterLink href="#" top="2.125rem">
            © 2007–2018, Aviasales — дешевые авиабилеты
          </FooterLink>
        </FooterItemsWrapper>
      </Column>
    </React.Fragment>
  );
};
