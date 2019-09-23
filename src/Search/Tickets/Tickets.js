import React from "react";
import styled from "styled-components";
import firstTypeLuggage from "./firstTypeLuggage.svg";
import russiaAirlines from "./russiaAirlines.svg";
import shareIcon from "./shareIcon.svg";
import ticketOpener from "./ticketOpener.svg";
import pinIcon from "./pinIcon.svg";

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
`;

const Icon = styled.img`
  width: 2.5rem;
  height: 1.4375rem;
`;

const SingleTab = styled.div`
  align-self: center;
`;

const BuyButton = styled.button`
  width: 10.125rem;
  height: 3rem;
  background: #ff6d00;
  color: #fff;
  border-radius: 0.25rem;
  border: 0;
  cursor: pointer;
`;

const BuyButtonProposal = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 0.75rem;
  line-height: 1.125rem;
  color: #a0b0b9;
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
`;

const FromInfo = styled.div`
  display: flex;
`;

const SegmentRouteTimeWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const TimeWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const FromCity = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 0.75rem;
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
            </FromInfo>
          </InfoSection>
          <TicketOpener>
            <Opener alt="Ticket details" src={ticketOpener} />
          </TicketOpener>
        </Ticket>
        <Ticket>dummy</Ticket>
        <Ticket>dummy</Ticket>
      </TicketsWrapper>
    </React.Fragment>
  );
};
