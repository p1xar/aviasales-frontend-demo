import React from "react";
import styled from "styled-components";
import HomeWrapper from "../HomeWrapper";
import plane from "./plane.svg";
import email from "./email.svg";
import list from "./list.svg";

const HomeWrapperCustom = styled(HomeWrapper)`
  max-width: 65rem;
  margin-top: 1rem;
  @media screen and (max-width: 1050px) {
    max-width: 95%;
  }
`;
const MainArticlesTitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: flex-start;
`;
const MainArticlesIcon = styled.img`
  width: 1rem;
  height: 0.9375rem;
  margin-right: 0.4375rem;
`;
const MainArticlesTitle = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 0.8125rem;
  line-height: 1.125rem;
  text-transform: uppercase;
`;

const MainArticlesDesc = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 0.875rem;
  line-height: 1.25rem;
`;

const MainArticleMore = styled.a`
  font-style: normal;
  font-weight: normal;
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: #00ace2;
  text-decoration: none;
  margin-left: 0.5rem;
`;
export default () => {
  return (
    <HomeWrapperCustom>
      <MainArticlesTitleWrapper>
        <MainArticlesIcon alt="PlaneIcon" src={plane} />
        <MainArticlesTitle>КАК КУПИТЬ ДЕШЕВЫЕ АВИАБИЛЕТЫ?</MainArticlesTitle>
      </MainArticlesTitleWrapper>
      <MainArticlesDesc>
        Aviasales.ru — это метапоисковик авиабилетов. Мы ищем билеты на самолет
        по сотням авиакомпаний и находим за считанные минуты самые дешевые
        авиабилеты. Чтобы купить авиабилет дешево, воспользуйтесь нашим поиском,
        который совершенно бесплатно сравнивает цены на авиабилеты онлайн и
        находит самые дешевые перелеты. Больше нет смысла ходить в авиакассы,
        обзванивать агентства — дешевый билет находится на расстоянии клика. На
        нашем сайте вы можете подобрать дешевые билеты на самолет в Европу, Азию
        и на другие континенты. Мы написали для вас простую инструкцию о том,
        как пользоваться поиском и экономить на перелетах от 1000 до 20 000 руб
        в год.
        <MainArticleMore href="#">Подробнее</MainArticleMore>
      </MainArticlesDesc>
      <MainArticlesTitleWrapper>
        <MainArticlesIcon alt="EmailIcon" src={email} />
        <MainArticlesTitle>ЭЛЕКТРОННЫЙ АВИАБИЛЕТ</MainArticlesTitle>
      </MainArticlesTitleWrapper>
      <MainArticlesDesc>
        Электронный авиабилет — это, по сути, обычный билет на самолет, но
        только в менее привычном для путешественника виде. Вся информация об
        авиаперелете (данные пассажира, маршрут следования) хранится в
        электронной базе, а пассажир получает на руки маршрут-квитанцию.
        Некоторые пассажиры, купив авиабилет онлайн и получив маршрут-квитанцию,
        удивлены ее видом — это обыкновенный лист формата А4, на котором
        распечатана вся информация о предстоящем перелете. Однако это
        действительно официальный документ, подтверждающий договор между
        авиаперевозчиком и пассажиром. При регистрации на рейс пассажир должен
        предъявить маршрут-квитанцию вместе с удостоверением личности точно так
        же, как предъявляют обыкновенный бумажный билет. Следует отметить, что
        электронный билет, приобретенный онлайн, стоит дешевле своего бумажного
        аналога.
        <MainArticleMore href="#">Подробнее</MainArticleMore>
      </MainArticlesDesc>
      <MainArticlesTitleWrapper>
        <MainArticlesIcon alt="ListIcon" src={list} />
        <MainArticlesTitle>20 СОВЕТОВ АВИАПУТЕШЕСТВЕННИКАМ</MainArticlesTitle>
      </MainArticlesTitleWrapper>
      <MainArticlesDesc>
        Есть масса путеводителей по странам, но ни одного о том, как провести
        время в самолете. Для того, чтобы сделать ваш перелет максимально
        комфортным, мы написали 20 советов о подготовке к путешествию. Ведь
        настоящее путешествие начинается со слов «Добро пожаловать на борт
        нашего самолета»!
        <MainArticleMore href="#">Подробнее</MainArticleMore>
      </MainArticlesDesc>
    </HomeWrapperCustom>
  );
};
