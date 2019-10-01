import React from "react";
import styled from "styled-components";
import firstTypeLuggage from "./svg/firstTypeLuggage.svg";
import secondTypeLuggage from "./svg/secondTypeLuggage.svg";
import thirdTypeLuggage from "./svg/thirdTypeLuggage.svg";
import fourthTypeLuggage from "./svg/fourthTypeLuggage.svg";
import russiaAirlines from "./svg/russiaAirlines.svg";
import nordwingAirlines from "./svg/nordwingAirlines.svg";
import redWingsAirlines from "./svg/redWingsAirlines.svg";
import flyAirlines from "./svg/flyAirlines.svg";
import shareIcon from "./svg/shareIcon.svg";
import ticketOpener from "./svg/ticketOpener.svg";
import pinIcon from "./svg/pinIcon.svg";
import planeTakeoff from "./svg/planeTakeoff.svg";
import planeLands from "./svg/planeLands.svg";
import dot from "./svg/dot.svg";
import path from "./svg/path.svg";

const TicketsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 320px) and (max-width: 1024px) {
    margin: 0 auto;
  }
`;

const Ticket = styled.div`
  width: 44.5625rem;
  height: 16.8125rem;
  background: #fff;
  border-radius: 0.25rem;
  margin-bottom: 1.25rem;
  display: flex;
  @media screen and (min-width: 320px) and (max-width: 640px) {
    width: 20rem;
  }
  @media screen and (min-width: 640px) and (max-width: 768px) {
    width: 38rem;
  }
  @media screen and (min-width: 768) and (max-width: 1024px) {
    width: 47rem;
  }
`;

const BuySection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 13.0625rem;
  border-right: 0.0625rem solid #ddd;
`;

const TabsWrapper = styled.div`
  display: flex;
  height: 3.5rem;
  width: 100%;
  justify-content: ${props => props.justify || "center"};
`;

const Icon = styled.img`
  width: 2.5rem;
  height: 1.4375rem;
`;

const SingleTab = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
`;

const SingleTabPassive = styled(SingleTab)`
  background: #f8fbfb;
  border-bottom: 0.05rem solid #dddddd;
  border-right: 0.05rem solid #dddddd;
  height: 3.5rem;
`;

const TabCaption = styled.div`
  font-style: normal;
  font-weight: ${props => props.weight || "normal"};
  color: ${props => props.color || "#9AB0B9"};
  font-size: 0.625rem;
  line-height: 0.9375rem;
`;

const BuyButton = styled.button`
  width: 10.125rem;
  height: 3rem;
  background: #ff6d00;
  color: #fff;
  border-radius: 0.25rem;
  border: 0;
  cursor: pointer;
  margin-top: ${props => props.top || "initial"};
`;

const BuyButtonProposal = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 0.75rem;
  line-height: 1.125rem;
  color: #a0b0b9;
`;

const OtherOffersWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 100%;
`;

const OfferRow = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const OfferAgent = styled.a`
  font-style: normal;
  font-weight: normal;
  font-size: 0.75rem;
  line-height: 1.125rem;
  text-decoration: none;
  color: #59bce5;
`;

const OfferPrice = styled(OfferAgent)`
  font-weight: 500;
`;

const MoreOffers = styled(OfferAgent)`
  font-weight: 500;
  margin-top: 0.5rem;
`;
const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 32rem;
  padding: 0 1rem;
`;

const CompanyInfo = styled.div`
  display: flex;
  margin-top: 1rem;
  align-items: center;
  width: 30rem;
  height: 2.25rem;
`;

const CompanyLogo = styled.img`
  width: 6.1875rem;
  height: 2.25rem;
`;

const FlightType = styled.p`
  color: #23a9f6;
  font-style: normal;
  font-weight: normal;
  font-size: 0.625rem;
  line-height: 1.125rem;
  border: 0.0625rem solid #2196f3;
  border-radius: 0.9375rem;
  padding: 0.25rem 0.6875rem;
  margin-left: auto;
  margin-right: 0.8125rem;
`;

const ShareIcon = styled.img`
  width: 1.0625rem;
  height: 0.875rem;
  margin-left: ${props => props.left || "initial"};
`;

const FromInfo = styled.div`
  display: flex;
  align-items: center;
`;

const SegmentRouteTimeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${props => props.align || "initial"};
`;

const TimeWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const FromCity = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 0.7rem;
  line-height: 0rem;
  margin-top: 0.1rem;
  color: #9ca5a8;
`;

const FromDate = styled(FromCity)`
  font-weight: normal;
  margin-top: 0.5rem;
`;

const TimeSegment = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 1.75rem;
  color: #323333;
  line-height: 0rem;
`;

const PinIcon = styled.img`
  width: 1.25rem;
  height: 1.25rem;
  margin-right: 0.5rem;
`;

const RouteVisualWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 14.1875rem;
  margin: 0 2rem;
`;

const TotalTimeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PlaneIcon = styled.img``;

const PathTimeWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const DotIcon = styled.img`
  width: 0.6875rem;
  height: 0.6875rem;
`;

const PathLine = styled.img`
  width: 12.8125rem;
  height: 0.0625rem;
`;

const TotalTimeTitle = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 0.75rem;
  line-height: 1.125rem;
  color: #a0b0b9;
`;

const CaptionTimeWrapper = styled(TotalTimeWrapper)``;

const FromCaption = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 0.625rem;
  line-height: 1.125rem;
  color: #4a4a4a;
  text-transform: uppercase;
`;

const ToCaption = styled(FromCaption)``;

const ToCity = styled(FromCity)``;
const ToDate = styled(FromDate)``;

const Hr = styled.hr`
  border: 1px dashed #dddddd;
  width: 100%;
  margin-top: 0.75rem;
`;

const ToInfo = styled(FromInfo)``;

const TicketOpener = styled.div`
  background: #edf5f7;
  width: 1.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Opener = styled.img`
  width: 0.625rem;
  height: 0.3125rem;
`;

const ShowMoreButton = styled.button`
  background: #00acde;
  border-radius: 0.25rem;
  text-decoration: none;
  color: #fff;
  text-transform: uppercase;
  height: 3.4375rem;
  width: 44.5625rem;
  border: 0;
  margin-bottom: 2.5rem;
  cursor: pointer;
`;

export default () => {
  return (
    <React.Fragment>
      <TicketsWrapper>
        <Ticket>
          <BuySection>
            <TabsWrapper>
              <SingleTab>
                <Icon
                  alt="Carry on 5 kg. Luggage 15 kg"
                  src={firstTypeLuggage}
                />
              </SingleTab>
            </TabsWrapper>
            <BuyButton>
              Купить <br /> за 7 712 ₽
            </BuyButton>
            <BuyButtonProposal>на Clickavia</BuyButtonProposal>
          </BuySection>
          <InfoSection>
            <CompanyInfo>
              <CompanyLogo alt="Russia Airlines" src={russiaAirlines} />
              <FlightType>Чартер</FlightType>
              <ShareIcon alt="Share ticket" src={shareIcon} />
            </CompanyInfo>
            <FromInfo>
              <SegmentRouteTimeWrapper>
                <TimeWrapper>
                  <PinIcon alt="Pin icon" src={pinIcon} />
                  <TimeSegment>00:05</TimeSegment>
                </TimeWrapper>
                <FromCity>Москва</FromCity>
                <FromDate>24 фев 2018, Сб</FromDate>
              </SegmentRouteTimeWrapper>
              <RouteVisualWrapper>
                <TotalTimeWrapper>
                  <PlaneIcon alt="Plane takeoff" src={planeTakeoff} />
                  <TotalTimeTitle>Всего: 5 ч</TotalTimeTitle>
                  <PlaneIcon alt="Plane lands" src={planeLands}></PlaneIcon>
                </TotalTimeWrapper>
                <PathTimeWrapper>
                  <DotIcon alt="Dot picture" src={dot} />
                  <PathLine alt="Path picture" src={path} />
                  <DotIcon alt="Dot picture" src={dot} />
                </PathTimeWrapper>
                <CaptionTimeWrapper>
                  <FromCaption>Vko</FromCaption>
                  <ToCaption>Bcn</ToCaption>
                </CaptionTimeWrapper>
              </RouteVisualWrapper>
              <SegmentRouteTimeWrapper align={"flex-end"}>
                <TimeWrapper>
                  <TimeSegment>03:05</TimeSegment>
                </TimeWrapper>
                <ToCity>Барселона</ToCity>
                <ToDate>24 фев 2018, Сб</ToDate>
              </SegmentRouteTimeWrapper>
            </FromInfo>
            <Hr />
            <ToInfo>
              <SegmentRouteTimeWrapper>
                <TimeWrapper>
                  <PinIcon alt="Pin icon" src={pinIcon} />
                  <TimeSegment>10:35</TimeSegment>
                </TimeWrapper>
                <FromCity>Москва</FromCity>
                <FromDate>3 марта 2018, Сб</FromDate>
              </SegmentRouteTimeWrapper>
              <RouteVisualWrapper>
                <TotalTimeWrapper>
                  <PlaneIcon alt="Plane takeoff" src={planeTakeoff} />
                  <TotalTimeTitle>Всего: 4ч 35 м</TotalTimeTitle>
                  <PlaneIcon alt="Plane lands" src={planeLands}></PlaneIcon>
                </TotalTimeWrapper>
                <PathTimeWrapper>
                  <DotIcon alt="Dot picture" src={dot} />
                  <PathLine alt="Path picture" src={path} />
                  <DotIcon alt="Dot picture" src={dot} />
                </PathTimeWrapper>
                <CaptionTimeWrapper>
                  <FromCaption>Bcn</FromCaption>
                  <ToCaption>Vko</ToCaption>
                </CaptionTimeWrapper>
              </RouteVisualWrapper>
              <SegmentRouteTimeWrapper align={"flex-end"}>
                <TimeWrapper>
                  <TimeSegment>17:10</TimeSegment>
                </TimeWrapper>
                <ToCity>Москва</ToCity>
                <ToDate>3 марта 2018, Сб</ToDate>
              </SegmentRouteTimeWrapper>
            </ToInfo>
          </InfoSection>
          <TicketOpener>
            <Opener alt="Ticket details" src={ticketOpener} />
          </TicketOpener>
        </Ticket>
        <Ticket>
          <BuySection>
            <TabsWrapper>
              <SingleTab>
                <Icon alt="Carry on 5 kg. No luggage" src={secondTypeLuggage} />
              </SingleTab>
            </TabsWrapper>
            <BuyButton>
              Купить <br /> за 8 029 ₽
            </BuyButton>
            <BuyButtonProposal>на Билетик Аэро</BuyButtonProposal>
          </BuySection>
          <InfoSection>
            <CompanyInfo>
              <CompanyLogo alt="Russia Airlines" src={nordwingAirlines} />
              <ShareIcon alt="Share ticket" src={shareIcon} left={"auto"} />
            </CompanyInfo>
            <FromInfo>
              <SegmentRouteTimeWrapper>
                <TimeWrapper>
                  <PinIcon alt="Pin icon" src={pinIcon} />
                  <TimeSegment>00:15</TimeSegment>
                </TimeWrapper>
                <FromCity>Москва</FromCity>
                <FromDate>24 фев 2018, Сб</FromDate>
              </SegmentRouteTimeWrapper>
              <RouteVisualWrapper>
                <TotalTimeWrapper>
                  <PlaneIcon alt="Plane takeoff" src={planeTakeoff} />
                  <TotalTimeTitle>Всего: 4 ч 55 м</TotalTimeTitle>
                  <PlaneIcon alt="Plane lands" src={planeLands}></PlaneIcon>
                </TotalTimeWrapper>
                <PathTimeWrapper>
                  <DotIcon alt="Dot picture" src={dot} />
                  <PathLine alt="Path picture" src={path} />
                  <DotIcon alt="Dot picture" src={dot} />
                </PathTimeWrapper>
                <CaptionTimeWrapper>
                  <FromCaption>Vko</FromCaption>
                  <ToCaption>Bcn</ToCaption>
                </CaptionTimeWrapper>
              </RouteVisualWrapper>
              <SegmentRouteTimeWrapper align={"flex-end"}>
                <TimeWrapper>
                  <TimeSegment>03:10</TimeSegment>
                </TimeWrapper>
                <ToCity>Барселона</ToCity>
                <ToDate>24 фев 2018, Сб</ToDate>
              </SegmentRouteTimeWrapper>
            </FromInfo>
            <Hr />
            <ToInfo>
              <SegmentRouteTimeWrapper>
                <TimeWrapper>
                  <PinIcon alt="Pin icon" src={pinIcon} />
                  <TimeSegment>10:45</TimeSegment>
                </TimeWrapper>
                <FromCity>Москва</FromCity>
                <FromDate>3 марта 2018, Сб</FromDate>
              </SegmentRouteTimeWrapper>
              <RouteVisualWrapper>
                <TotalTimeWrapper>
                  <PlaneIcon alt="Plane takeoff" src={planeTakeoff} />
                  <TotalTimeTitle>Всего: 4ч 30 м</TotalTimeTitle>
                  <PlaneIcon alt="Plane lands" src={planeLands}></PlaneIcon>
                </TotalTimeWrapper>
                <PathTimeWrapper>
                  <DotIcon alt="Dot picture" src={dot} />
                  <PathLine alt="Path picture" src={path} />
                  <DotIcon alt="Dot picture" src={dot} />
                </PathTimeWrapper>
                <CaptionTimeWrapper>
                  <FromCaption>Bcn</FromCaption>
                  <ToCaption>Vko</ToCaption>
                </CaptionTimeWrapper>
              </RouteVisualWrapper>
              <SegmentRouteTimeWrapper align={"flex-end"}>
                <TimeWrapper>
                  <TimeSegment>17:15</TimeSegment>
                </TimeWrapper>
                <ToCity>Москва</ToCity>
                <ToDate>3 марта 2018, Сб</ToDate>
              </SegmentRouteTimeWrapper>
            </ToInfo>
          </InfoSection>
          <TicketOpener>
            <Opener alt="Ticket details" src={ticketOpener} />
          </TicketOpener>
        </Ticket>
        <Ticket>
          <BuySection>
            <TabsWrapper justify={"space-between"}>
              <SingleTabPassive>
                <Icon alt="Carry on 5 kg. No luggage" src={thirdTypeLuggage} />
                <TabCaption>Нет багажа</TabCaption>
              </SingleTabPassive>
              <SingleTab>
                <Icon alt="Carry on 5 kg. No luggage" src={fourthTypeLuggage} />
                <TabCaption weight={"500"} color={"#66D295"}>
                  - 136 ₽
                </TabCaption>
              </SingleTab>
            </TabsWrapper>
            <BuyButton top={"1rem"}>
              Купить <br /> за 8 164 ₽
            </BuyButton>
            <BuyButtonProposal>на Aviakassa</BuyButtonProposal>
          </BuySection>
          <InfoSection>
            <CompanyInfo>
              <CompanyLogo alt="Russia Airlines" src={nordwingAirlines} />
              <FlightType>Чартер</FlightType>
              <ShareIcon alt="Share ticket" src={shareIcon} />
            </CompanyInfo>
            <FromInfo>
              <SegmentRouteTimeWrapper>
                <TimeWrapper>
                  <PinIcon alt="Pin icon" src={pinIcon} />
                  <TimeSegment>00:15</TimeSegment>
                </TimeWrapper>
                <FromCity>Москва</FromCity>
                <FromDate>24 фев 2018, Сб</FromDate>
              </SegmentRouteTimeWrapper>
              <RouteVisualWrapper>
                <TotalTimeWrapper>
                  <PlaneIcon alt="Plane takeoff" src={planeTakeoff} />
                  <TotalTimeTitle>Всего: 4 ч 55 м</TotalTimeTitle>
                  <PlaneIcon alt="Plane lands" src={planeLands}></PlaneIcon>
                </TotalTimeWrapper>
                <PathTimeWrapper>
                  <DotIcon alt="Dot picture" src={dot} />
                  <PathLine alt="Path picture" src={path} />
                  <DotIcon alt="Dot picture" src={dot} />
                </PathTimeWrapper>
                <CaptionTimeWrapper>
                  <FromCaption>Vko</FromCaption>
                  <ToCaption>Bcn</ToCaption>
                </CaptionTimeWrapper>
              </RouteVisualWrapper>
              <SegmentRouteTimeWrapper align={"flex-end"}>
                <TimeWrapper>
                  <TimeSegment>03:10</TimeSegment>
                </TimeWrapper>
                <ToCity>Барселона</ToCity>
                <ToDate>24 фев 2018, Сб</ToDate>
              </SegmentRouteTimeWrapper>
            </FromInfo>
            <Hr />
            <ToInfo>
              <SegmentRouteTimeWrapper>
                <TimeWrapper>
                  <PinIcon alt="Pin icon" src={pinIcon} />
                  <TimeSegment>10:45</TimeSegment>
                </TimeWrapper>
                <FromCity>Москва</FromCity>
                <FromDate>3 марта 2018, Сб</FromDate>
              </SegmentRouteTimeWrapper>
              <RouteVisualWrapper>
                <TotalTimeWrapper>
                  <PlaneIcon alt="Plane takeoff" src={planeTakeoff} />
                  <TotalTimeTitle>Всего: 4ч 30 м</TotalTimeTitle>
                  <PlaneIcon alt="Plane lands" src={planeLands}></PlaneIcon>
                </TotalTimeWrapper>
                <PathTimeWrapper>
                  <DotIcon alt="Dot picture" src={dot} />
                  <PathLine alt="Path picture" src={path} />
                  <DotIcon alt="Dot picture" src={dot} />
                </PathTimeWrapper>
                <CaptionTimeWrapper>
                  <FromCaption>Bcn</FromCaption>
                  <ToCaption>Vko</ToCaption>
                </CaptionTimeWrapper>
              </RouteVisualWrapper>
              <SegmentRouteTimeWrapper align={"flex-end"}>
                <TimeWrapper>
                  <TimeSegment>17:15</TimeSegment>
                </TimeWrapper>
                <ToCity>Москва</ToCity>
                <ToDate>3 марта 2018, Сб</ToDate>
              </SegmentRouteTimeWrapper>
            </ToInfo>
          </InfoSection>
          <TicketOpener>
            <Opener alt="Ticket details" src={ticketOpener} />
          </TicketOpener>
        </Ticket>
        <Ticket>
          <BuySection>
            <TabsWrapper justify={"space-between"}>
              <SingleTabPassive>
                <Icon alt="Carry on 5 kg. No luggage" src={thirdTypeLuggage} />
                <TabCaption>Нет багажа</TabCaption>
              </SingleTabPassive>
              <SingleTab>
                <Icon alt="Carry on 5 kg. No luggage" src={fourthTypeLuggage} />
                <TabCaption weight={"500"} color={"#66D295"}>
                  - 267 ₽
                </TabCaption>
              </SingleTab>
            </TabsWrapper>
            <BuyButton top={"1rem"}>
              Купить <br /> за 8 240 ₽
            </BuyButton>
            <BuyButtonProposal>на Билетик Аэро</BuyButtonProposal>
          </BuySection>
          <InfoSection>
            <CompanyInfo>
              <CompanyLogo alt="Red Wings" src={redWingsAirlines} />
              <FlightType>Чартер</FlightType>
              <ShareIcon alt="Share ticket" src={shareIcon} />
            </CompanyInfo>
            <FromInfo>
              <SegmentRouteTimeWrapper>
                <TimeWrapper>
                  <PinIcon alt="Pin icon" src={pinIcon} />
                  <TimeSegment>07:00</TimeSegment>
                </TimeWrapper>
                <FromCity>Москва</FromCity>
                <FromDate>24 фев 2018, Сб</FromDate>
              </SegmentRouteTimeWrapper>
              <RouteVisualWrapper>
                <TotalTimeWrapper>
                  <PlaneIcon alt="Plane takeoff" src={planeTakeoff} />
                  <TotalTimeTitle>Всего: 4 ч 30 м</TotalTimeTitle>
                  <PlaneIcon alt="Plane lands" src={planeLands}></PlaneIcon>
                </TotalTimeWrapper>
                <PathTimeWrapper>
                  <DotIcon alt="Dot picture" src={dot} />
                  <PathLine alt="Path picture" src={path} />
                  <DotIcon alt="Dot picture" src={dot} />
                </PathTimeWrapper>
                <CaptionTimeWrapper>
                  <FromCaption>Vko</FromCaption>
                  <ToCaption>Bcn</ToCaption>
                </CaptionTimeWrapper>
              </RouteVisualWrapper>
              <SegmentRouteTimeWrapper align={"flex-end"}>
                <TimeWrapper>
                  <TimeSegment>09:30</TimeSegment>
                </TimeWrapper>
                <ToCity>Барселона</ToCity>
                <ToDate>24 фев 2018, Сб</ToDate>
              </SegmentRouteTimeWrapper>
            </FromInfo>
            <Hr />
            <ToInfo>
              <SegmentRouteTimeWrapper>
                <TimeWrapper>
                  <PinIcon alt="Pin icon" src={pinIcon} />
                  <TimeSegment>11:00</TimeSegment>
                </TimeWrapper>
                <FromCity>Москва</FromCity>
                <FromDate>3 марта 2018, Сб</FromDate>
              </SegmentRouteTimeWrapper>
              <RouteVisualWrapper>
                <TotalTimeWrapper>
                  <PlaneIcon alt="Plane takeoff" src={planeTakeoff} />
                  <TotalTimeTitle>Всего: 4ч 10 м</TotalTimeTitle>
                  <PlaneIcon alt="Plane lands" src={planeLands}></PlaneIcon>
                </TotalTimeWrapper>
                <PathTimeWrapper>
                  <DotIcon alt="Dot picture" src={dot} />
                  <PathLine alt="Path picture" src={path} />
                  <DotIcon alt="Dot picture" src={dot} />
                </PathTimeWrapper>
                <CaptionTimeWrapper>
                  <FromCaption>Bcn</FromCaption>
                  <ToCaption>Vko</ToCaption>
                </CaptionTimeWrapper>
              </RouteVisualWrapper>
              <SegmentRouteTimeWrapper align={"flex-end"}>
                <TimeWrapper>
                  <TimeSegment>17:10</TimeSegment>
                </TimeWrapper>
                <ToCity>Москва</ToCity>
                <ToDate>3 марта 2018, Сб</ToDate>
              </SegmentRouteTimeWrapper>
            </ToInfo>
          </InfoSection>
          <TicketOpener>
            <Opener alt="Ticket details" src={ticketOpener} />
          </TicketOpener>
        </Ticket>
        <Ticket>
          <BuySection>
            <TabsWrapper>
              <SingleTab>
                <Icon
                  alt="Carry on 5 kg. Luggage 15 kg"
                  src={firstTypeLuggage}
                />
              </SingleTab>
            </TabsWrapper>
            <BuyButton>
              Купить <br /> за 9 108 ₽
            </BuyButton>
            <BuyButtonProposal>на Clickavia</BuyButtonProposal>
          </BuySection>
          <InfoSection>
            <CompanyInfo>
              <CompanyLogo alt="Russia Airlines" src={redWingsAirlines} />
              <FlightType>Чартер</FlightType>
              <ShareIcon alt="Share ticket" src={shareIcon} />
            </CompanyInfo>
            <FromInfo>
              <SegmentRouteTimeWrapper>
                <TimeWrapper>
                  <PinIcon alt="Pin icon" src={pinIcon} />
                  <TimeSegment>00:05</TimeSegment>
                </TimeWrapper>
                <FromCity>Москва</FromCity>
                <FromDate>24 фев 2018, Сб</FromDate>
              </SegmentRouteTimeWrapper>
              <RouteVisualWrapper>
                <TotalTimeWrapper>
                  <PlaneIcon alt="Plane takeoff" src={planeTakeoff} />
                  <TotalTimeTitle>Всего: 5 ч</TotalTimeTitle>
                  <PlaneIcon alt="Plane lands" src={planeLands}></PlaneIcon>
                </TotalTimeWrapper>
                <PathTimeWrapper>
                  <DotIcon alt="Dot picture" src={dot} />
                  <PathLine alt="Path picture" src={path} />
                  <DotIcon alt="Dot picture" src={dot} />
                </PathTimeWrapper>
                <CaptionTimeWrapper>
                  <FromCaption>Vko</FromCaption>
                  <ToCaption>Bcn</ToCaption>
                </CaptionTimeWrapper>
              </RouteVisualWrapper>
              <SegmentRouteTimeWrapper align={"flex-end"}>
                <TimeWrapper>
                  <TimeSegment>03:05</TimeSegment>
                </TimeWrapper>
                <ToCity>Барселона</ToCity>
                <ToDate>24 фев 2018, Сб</ToDate>
              </SegmentRouteTimeWrapper>
            </FromInfo>
            <Hr />
            <ToInfo>
              <SegmentRouteTimeWrapper>
                <TimeWrapper>
                  <PinIcon alt="Pin icon" src={pinIcon} />
                  <TimeSegment>11:00</TimeSegment>
                </TimeWrapper>
                <FromCity>Москва</FromCity>
                <FromDate>3 марта 2018, Сб</FromDate>
              </SegmentRouteTimeWrapper>
              <RouteVisualWrapper>
                <TotalTimeWrapper>
                  <PlaneIcon alt="Plane takeoff" src={planeTakeoff} />
                  <TotalTimeTitle>Всего: 4ч 10 м</TotalTimeTitle>
                  <PlaneIcon alt="Plane lands" src={planeLands}></PlaneIcon>
                </TotalTimeWrapper>
                <PathTimeWrapper>
                  <DotIcon alt="Dot picture" src={dot} />
                  <PathLine alt="Path picture" src={path} />
                  <DotIcon alt="Dot picture" src={dot} />
                </PathTimeWrapper>
                <CaptionTimeWrapper>
                  <FromCaption>Bcn</FromCaption>
                  <ToCaption>Vko</ToCaption>
                </CaptionTimeWrapper>
              </RouteVisualWrapper>
              <SegmentRouteTimeWrapper align={"flex-end"}>
                <TimeWrapper>
                  <TimeSegment>17:10</TimeSegment>
                </TimeWrapper>
                <ToCity>Москва</ToCity>
                <ToDate>3 марта 2018, Сб</ToDate>
              </SegmentRouteTimeWrapper>
            </ToInfo>
          </InfoSection>
          <TicketOpener>
            <Opener alt="Ticket details" src={ticketOpener} />
          </TicketOpener>
        </Ticket>
        <Ticket>
          <BuySection>
            <TabsWrapper>
              <SingleTab>
                <Icon
                  alt="Carry on 5 kg. Luggage 15 kg"
                  src={secondTypeLuggage}
                />
                <TabCaption color={"#FF654E"}>Осталось 4 билета</TabCaption>
              </SingleTab>
            </TabsWrapper>
            <BuyButton>
              Купить <br /> за 9 269 ₽
            </BuyButton>
            <BuyButtonProposal>на Biletix</BuyButtonProposal>
            <OtherOffersWrapper>
              <OfferRow>
                <OfferAgent href="#">Svyaznoy Travel</OfferAgent>
                <OfferPrice href="#">9 275 ₽</OfferPrice>
              </OfferRow>
              <OfferRow>
                <OfferAgent href="#">Билетик Аэро</OfferAgent>
                <OfferPrice href="#">9 587 ₽</OfferPrice>
              </OfferRow>
            </OtherOffersWrapper>
            <MoreOffers href="#">+ Еще 4 предложения</MoreOffers>
          </BuySection>
          <InfoSection>
            <CompanyInfo>
              <CompanyLogo alt="Russia Airlines" src={flyAirlines} />
              <FlightType>Чартер</FlightType>
              <ShareIcon alt="Share ticket" src={shareIcon} />
            </CompanyInfo>
            <FromInfo>
              <SegmentRouteTimeWrapper>
                <TimeWrapper>
                  <PinIcon alt="Pin icon" src={pinIcon} />
                  <TimeSegment>07:30</TimeSegment>
                </TimeWrapper>
                <FromCity>Москва</FromCity>
                <FromDate>24 фев 2018, Сб</FromDate>
              </SegmentRouteTimeWrapper>
              <RouteVisualWrapper>
                <TotalTimeWrapper>
                  <PlaneIcon alt="Plane takeoff" src={planeTakeoff} />
                  <TotalTimeTitle>Всего: 4 ч 20м</TotalTimeTitle>
                  <PlaneIcon alt="Plane lands" src={planeLands}></PlaneIcon>
                </TotalTimeWrapper>
                <PathTimeWrapper>
                  <DotIcon alt="Dot picture" src={dot} />
                  <PathLine alt="Path picture" src={path} />
                  <DotIcon alt="Dot picture" src={dot} />
                </PathTimeWrapper>
                <CaptionTimeWrapper>
                  <FromCaption>Vko</FromCaption>
                  <ToCaption>Bcn</ToCaption>
                </CaptionTimeWrapper>
              </RouteVisualWrapper>
              <SegmentRouteTimeWrapper align={"flex-end"}>
                <TimeWrapper>
                  <TimeSegment>09:50</TimeSegment>
                </TimeWrapper>
                <ToCity>Барселона</ToCity>
                <ToDate>24 фев 2018, Сб</ToDate>
              </SegmentRouteTimeWrapper>
            </FromInfo>
            <Hr />
            <ToInfo>
              <SegmentRouteTimeWrapper>
                <TimeWrapper>
                  <PinIcon alt="Pin icon" src={pinIcon} />
                  <TimeSegment>11:20</TimeSegment>
                </TimeWrapper>
                <FromCity>Москва</FromCity>
                <FromDate>3 марта 2018, Сб</FromDate>
              </SegmentRouteTimeWrapper>
              <RouteVisualWrapper>
                <TotalTimeWrapper>
                  <PlaneIcon alt="Plane takeoff" src={planeTakeoff} />
                  <TotalTimeTitle>Всего: 4ч 15 м</TotalTimeTitle>
                  <PlaneIcon alt="Plane lands" src={planeLands}></PlaneIcon>
                </TotalTimeWrapper>
                <PathTimeWrapper>
                  <DotIcon alt="Dot picture" src={dot} />
                  <PathLine alt="Path picture" src={path} />
                  <DotIcon alt="Dot picture" src={dot} />
                </PathTimeWrapper>
                <CaptionTimeWrapper>
                  <FromCaption>Bcn</FromCaption>
                  <ToCaption>Vko</ToCaption>
                </CaptionTimeWrapper>
              </RouteVisualWrapper>
              <SegmentRouteTimeWrapper align={"flex-end"}>
                <TimeWrapper>
                  <TimeSegment>17:35</TimeSegment>
                </TimeWrapper>
                <ToCity>Москва</ToCity>
                <ToDate>3 марта 2018, Сб</ToDate>
              </SegmentRouteTimeWrapper>
            </ToInfo>
          </InfoSection>
          <TicketOpener>
            <Opener alt="Ticket details" src={ticketOpener} />
          </TicketOpener>
        </Ticket>
        <Ticket>
          <BuySection>
            <TabsWrapper>
              <SingleTab>
                <Icon alt="Carry on 5 kg. No luggage" src={secondTypeLuggage} />
              </SingleTab>
            </TabsWrapper>
            <BuyButton>
              Купить <br /> за 8 029 ₽
            </BuyButton>
            <BuyButtonProposal>на Билетик Аэро</BuyButtonProposal>
          </BuySection>
          <InfoSection>
            <CompanyInfo>
              <CompanyLogo alt="Russia Airlines" src={nordwingAirlines} />
              <ShareIcon alt="Share ticket" src={shareIcon} left={"auto"} />
            </CompanyInfo>
            <FromInfo>
              <SegmentRouteTimeWrapper>
                <TimeWrapper>
                  <PinIcon alt="Pin icon" src={pinIcon} />
                  <TimeSegment>00:15</TimeSegment>
                </TimeWrapper>
                <FromCity>Москва</FromCity>
                <FromDate>24 фев 2018, Сб</FromDate>
              </SegmentRouteTimeWrapper>
              <RouteVisualWrapper>
                <TotalTimeWrapper>
                  <PlaneIcon alt="Plane takeoff" src={planeTakeoff} />
                  <TotalTimeTitle>Всего: 4 ч 55 м</TotalTimeTitle>
                  <PlaneIcon alt="Plane lands" src={planeLands}></PlaneIcon>
                </TotalTimeWrapper>
                <PathTimeWrapper>
                  <DotIcon alt="Dot picture" src={dot} />
                  <PathLine alt="Path picture" src={path} />
                  <DotIcon alt="Dot picture" src={dot} />
                </PathTimeWrapper>
                <CaptionTimeWrapper>
                  <FromCaption>Vko</FromCaption>
                  <ToCaption>Bcn</ToCaption>
                </CaptionTimeWrapper>
              </RouteVisualWrapper>
              <SegmentRouteTimeWrapper align={"flex-end"}>
                <TimeWrapper>
                  <TimeSegment>03:10</TimeSegment>
                </TimeWrapper>
                <ToCity>Барселона</ToCity>
                <ToDate>24 фев 2018, Сб</ToDate>
              </SegmentRouteTimeWrapper>
            </FromInfo>
            <Hr />
            <ToInfo>
              <SegmentRouteTimeWrapper>
                <TimeWrapper>
                  <PinIcon alt="Pin icon" src={pinIcon} />
                  <TimeSegment>10:45</TimeSegment>
                </TimeWrapper>
                <FromCity>Москва</FromCity>
                <FromDate>3 марта 2018, Сб</FromDate>
              </SegmentRouteTimeWrapper>
              <RouteVisualWrapper>
                <TotalTimeWrapper>
                  <PlaneIcon alt="Plane takeoff" src={planeTakeoff} />
                  <TotalTimeTitle>Всего: 4ч 30 м</TotalTimeTitle>
                  <PlaneIcon alt="Plane lands" src={planeLands}></PlaneIcon>
                </TotalTimeWrapper>
                <PathTimeWrapper>
                  <DotIcon alt="Dot picture" src={dot} />
                  <PathLine alt="Path picture" src={path} />
                  <DotIcon alt="Dot picture" src={dot} />
                </PathTimeWrapper>
                <CaptionTimeWrapper>
                  <FromCaption>Bcn</FromCaption>
                  <ToCaption>Vko</ToCaption>
                </CaptionTimeWrapper>
              </RouteVisualWrapper>
              <SegmentRouteTimeWrapper align={"flex-end"}>
                <TimeWrapper>
                  <TimeSegment>17:15</TimeSegment>
                </TimeWrapper>
                <ToCity>Москва</ToCity>
                <ToDate>3 марта 2018, Сб</ToDate>
              </SegmentRouteTimeWrapper>
            </ToInfo>
          </InfoSection>
          <TicketOpener>
            <Opener alt="Ticket details" src={ticketOpener} />
          </TicketOpener>
        </Ticket>
        <Ticket>
          <BuySection>
            <TabsWrapper>
              <SingleTab>
                <Icon alt="Carry on 5 kg. No luggage" src={firstTypeLuggage} />
              </SingleTab>
            </TabsWrapper>
            <BuyButton>
              Купить <br /> за 9 485 ₽
            </BuyButton>
            <BuyButtonProposal>на Clickavia</BuyButtonProposal>
          </BuySection>
          <InfoSection>
            <CompanyInfo>
              <CompanyLogo alt="Russia Airlines" src={nordwingAirlines} />
              <FlightType>Чартер</FlightType>
              <ShareIcon alt="Share ticket" src={shareIcon} />
            </CompanyInfo>
            <FromInfo>
              <SegmentRouteTimeWrapper>
                <TimeWrapper>
                  <PinIcon alt="Pin icon" src={pinIcon} />
                  <TimeSegment>00:05</TimeSegment>
                </TimeWrapper>
                <FromCity>Москва</FromCity>
                <FromDate>24 фев 2018, Сб</FromDate>
              </SegmentRouteTimeWrapper>
              <RouteVisualWrapper>
                <TotalTimeWrapper>
                  <PlaneIcon alt="Plane takeoff" src={planeTakeoff} />
                  <TotalTimeTitle>Всего: 5ч</TotalTimeTitle>
                  <PlaneIcon alt="Plane lands" src={planeLands}></PlaneIcon>
                </TotalTimeWrapper>
                <PathTimeWrapper>
                  <DotIcon alt="Dot picture" src={dot} />
                  <PathLine alt="Path picture" src={path} />
                  <DotIcon alt="Dot picture" src={dot} />
                </PathTimeWrapper>
                <CaptionTimeWrapper>
                  <FromCaption>Vko</FromCaption>
                  <ToCaption>Bcn</ToCaption>
                </CaptionTimeWrapper>
              </RouteVisualWrapper>
              <SegmentRouteTimeWrapper align={"flex-end"}>
                <TimeWrapper>
                  <TimeSegment>03:05</TimeSegment>
                </TimeWrapper>
                <ToCity>Барселона</ToCity>
                <ToDate>24 фев 2018, Сб</ToDate>
              </SegmentRouteTimeWrapper>
            </FromInfo>
            <Hr />
            <ToInfo>
              <SegmentRouteTimeWrapper>
                <TimeWrapper>
                  <PinIcon alt="Pin icon" src={pinIcon} />
                  <TimeSegment>11:20</TimeSegment>
                </TimeWrapper>
                <FromCity>Москва</FromCity>
                <FromDate>3 марта 2018, Сб</FromDate>
              </SegmentRouteTimeWrapper>
              <RouteVisualWrapper>
                <TotalTimeWrapper>
                  <PlaneIcon alt="Plane takeoff" src={planeTakeoff} />
                  <TotalTimeTitle>Всего: 4ч 15 м</TotalTimeTitle>
                  <PlaneIcon alt="Plane lands" src={planeLands}></PlaneIcon>
                </TotalTimeWrapper>
                <PathTimeWrapper>
                  <DotIcon alt="Dot picture" src={dot} />
                  <PathLine alt="Path picture" src={path} />
                  <DotIcon alt="Dot picture" src={dot} />
                </PathTimeWrapper>
                <CaptionTimeWrapper>
                  <FromCaption>Bcn</FromCaption>
                  <ToCaption>Vko</ToCaption>
                </CaptionTimeWrapper>
              </RouteVisualWrapper>
              <SegmentRouteTimeWrapper align={"flex-end"}>
                <TimeWrapper>
                  <TimeSegment>17:15</TimeSegment>
                </TimeWrapper>
                <ToCity>Москва</ToCity>
                <ToDate>3 марта 2018, Сб</ToDate>
              </SegmentRouteTimeWrapper>
            </ToInfo>
          </InfoSection>
          <TicketOpener>
            <Opener alt="Ticket details" src={ticketOpener} />
          </TicketOpener>
        </Ticket>
        <ShowMoreButton href="#">Показать еще 10 билетов!</ShowMoreButton>
      </TicketsWrapper>
    </React.Fragment>
  );
};
