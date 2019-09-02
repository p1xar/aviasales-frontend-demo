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
  margin-right: 0.2rem;
`;

const FooterItemsWrapper = styled.div`
  display: flex;
  margin-top: ${props => props.top};
  align-items: center;
  align-self: ${props => props.align};
  @media screen and (max-width: 320px) {
    flex-wrap: wrap;
  }
`;

const CustomFooterItemsWrapper = styled(FooterItemsWrapper)`
  @media screen and (max-width: 320px) {
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
`;

const AppIcon = styled.img`
  width: 7.8125rem;
  height: 2.625rem;
  margin-right: ${props => props.right};
  @media screen and (max-width: 320px) {
    margin-right: 0rem;
    margin-top: 0.5rem;
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
          <FooterLink href="#" right="1rem">
            Вконтакте
          </FooterLink>
          <Icon alt="Facebook" src={facebook} />
          <FooterLink href="#" right="1rem">
            Фейсбук
          </FooterLink>
          <Icon alt="Instagram" src={instagram} />
          <FooterLink href="#" right="1rem">
            Инстаграм
          </FooterLink>
          <Icon alt="Twitter" src={twitter} />
          <FooterLink href="#" right="1rem">
            Твиттер
          </FooterLink>
          <Icon alt="Viber" src={viber} />
          <FooterLink href="#" right="1rem">
            Вайбер
          </FooterLink>
        </FooterItemsWrapper>
      </Column>
      <Column>
        <CustomFooterItemsWrapper>
          <FooterItemsWrapper top="2rem">
            <FooterLink href="#">Поиск и бронирование отелей</FooterLink>
          </FooterItemsWrapper>
          <AppIcon alt="iOS donwload" src={ios} right="0.625rem" />
          <AppIcon
            alt="Google Play donwload"
            src={googleplay}
            right="0.625rem"
          />
          <AppIcon alt="Windows phone donwload" src={windows} />
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
