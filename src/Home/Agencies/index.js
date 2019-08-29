import React from "react";
import styled from "styled-components";
import HomeWrapper from "../HomeWrapper";

import aeroflot from "./aeroflot.png";
import s7 from "./s7.png";
import onetwotrip from "./onetwotrip.png";
import koreanair from "./koreanair.png";
import elvaline from "./elvaline.png";
import rect from "./rect.svg";
import twitter from "./twitter.svg";
import facebook from "./facebook.svg";
import vk from "./vk.svg";
import rss from "./rss.svg";

const Title = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 2rem;
  line-height: 2.5rem;
  margin-top: 6.0625rem;
  text-align: center;
  @media screen and (max-width: 20rem) {
    display: none;
  }
`;

const AgenciesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 20rem) {
    display: none;
  }
`;

const Agency = styled.img`
  &:not(:last-child) {
    margin-right: 1.25rem;
  }

  @media screen and (max-width: 51.4375rem) {
    &:not(:last-child),
    :last-child {
      margin-right: 2rem;
      margin-left: 2rem;
      margin-top: 2.375rem;
    }
  }
`;

const Hr = styled.img`
  width: 100%;
  height: 0.4375rem;
  margin-top: 4.25rem;
  @media screen and (max-width: 20rem) {
    display: none;
  }
`;

const SubscriptionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 2.1875rem;
  margin-bottom: 1.5rem;
  max-width: 65rem;
  @media screen and (max-width: 20rem) {
    display: none;
  }
  @media screen and (min-width: 20rem) and (max-width: 48rem) {
    max-width: 100%;
    flex-direction: column;
    justify-content: center;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  &:not(:last-child) {
    margin-right: 10.3125rem;
  }
  @media screen and (max-width: 48rem) {
    &:not(:last-child) {
      margin-right: 0rem;
    }
  }
  @media screen and (min-width: 48.00625rem) and (max-width: 67.75rem) {
    &:not(:last-child) {
      margin-right: 2rem;
    }
  }
`;

const SubscriptionTitle = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 1rem;
  line-height: 1.25rem;
  color: #5c5c5c;
  @media screen and (max-width: 48rem) {
    text-align: center;
  }
`;

const SubscriptionDesc = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 1rem;
  line-height: 1.375rem;
  @media screen and (max-width: 48rem) {
    text-align: center;
  }
`;

const CustomColumn = styled(Column)`
  flex-direction: row;
  align-self: flex-start;
  margin-top: 0.96rem;
  @media screen and (max-width: 48rem) {
    flex-direction: column;
    align-items: center;
  }
`;

const SocialWrapper = styled.div`
  display: inline-flex;
`;

const Icon = styled.img`
  &:not(:last-child) {
    margin-right: 0.375rem;
  }
`;

const SubscriptionForm = styled.div`
  margin-left: 1rem;
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 48rem) {
    margin-top: 1.5rem;
  }
`;

const EmailInput = styled.input`
  width: 11.9375rem;
  height: 2.125rem;
  border: 0.0625rem solid #a0b0b9;
  border-radius: 0.125rem;
  background: #fff;
  font-style: normal;
  font-weight: normal;
  font-size: 1rem;
  line-height: 1.25rem;
  padding-left: 0.8125rem;
  @media screen and (max-width: 48rem) {
    width: 9.938rem;
  }
`;

const Button = styled.a`
  font-style: normal;
  font-weight: normal;
  font-size: 1rem;
  line-height: 1.25rem;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  padding-top: 0.59rem;
  padding-bottom: 0.59rem;
  margin-left: -0.1rem;
  background: #ff8e41;
  border-radius: 0.125rem;
  color: #fff;
  text-decoration: none;
  @media screen and (max-width: 48rem) {
    padding-left: 0.25rem;
    padding-right: 0.25rem;
  }
`;

export default () => {
  return (
    <HomeWrapper>
      <Title>Дешевые авиабилеты от крупнейших авиакомпаний и агентств</Title>
      <AgenciesWrapper>
        <Agency alt="Aeroflot" src={aeroflot} />
        <Agency alt="S7" src={s7} />
        <Agency alt="OneTwoTrip" src={onetwotrip} />
        <Agency alt="KoreanAir" src={koreanair} />
        <Agency alt="Elvaline" src={elvaline} />
      </AgenciesWrapper>
      <Hr alt="horizontal ruller" src={rect} />
      <SubscriptionWrapper>
        <Column>
          <SubscriptionTitle>
            Хотите знать всё о скидках на авиабилеты?
          </SubscriptionTitle>
          <SubscriptionDesc>
            Вы можете подписаться на нашу рассылку
            <br /> через соцсети или по электронной почте.
          </SubscriptionDesc>
        </Column>
        <CustomColumn>
          <SocialWrapper>
            <Icon alt="twitter" src={twitter} />
            <Icon alt="facebook" src={facebook} />
            <Icon alt="vk" src={vk} />
            <Icon alt="rss" src={rss} />
          </SocialWrapper>
          <SubscriptionForm>
            <EmailInput placeholder="Ваш email" />
            <Button href="#">Подписаться</Button>
          </SubscriptionForm>
        </CustomColumn>
      </SubscriptionWrapper>
    </HomeWrapper>
  );
};
