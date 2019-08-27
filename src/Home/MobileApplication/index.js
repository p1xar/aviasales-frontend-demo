import React from 'react';
import styled from 'styled-components';
import HomeWrapper from '../HomeWrapper'; 

import phone from './phone.png';
import star from './star.svg';
import halfstar from './halfstar.svg';
import apple from './apple.svg';
import android from './android.svg';
import windows from './windows.svg';

const HomeWrapperCustom = styled(HomeWrapper)`
    background: linear-gradient(163.59deg, #00B0DE 0%, #196EBD 100%);
    max-width: 100%;
    margin-top: 2.5rem;
    height: 17.5625rem;
`;

const MainWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    width: 65rem;
    @media screen and (max-width: 65.625rem) {
        width: 100%;
    }
`;

const AppScreenshot = styled.img`
    width: 14.625rem;
    height: 19.25rem;
    position: relative;
    bottom: 0.85rem;
    margin-right: 5rem;
`;

const AppDescriptionWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const AppDescriptionTitle = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 2rem;
    line-height: 2.5rem;
    color: #fff;
    margin-bottom: 0.5rem;
`;

const AppRatingWrapper = styled.div`
    display: flex;
    flex-direction: row;
`;

const AppRating = styled.div`
    display: flex;
    align-items: center;
`;

const Star = styled.img`
    width: 0.625rem;
    height: 0.625rem;
    margin-right: 0.3125rem;
`;

const HalfStar = styled(Star)``;

const AppRatingTitle = styled.p`
    font-style: normal;
    font-weight: normal;
    font-size: 0.875rem;
    line-height: 1.25rem;
    color: #fff;
`;

const AppPlatformsWrapper = styled.div`
    display: flex;
    margin-top: 2.6875rem;
`;

const AppPlatfromColumn = styled.div`
    display: flex;
    &:not(:last-child) {
        border-right: 0.0625rem solid rgba(255,255,255, 0.5);
        padding-right: 1.3125rem;
    }
    &:not(:first-child) {
        margin-left: 1.25rem;
    } 
`;

const Icon = styled.img`
    width: 1.125rem;
    height: 1.375rem;
    margin-right: 0.5rem;
`;

const AppLink = styled.a`
    font-style: normal;
    font-weight: normal;
    font-size: 0.875rem;
    line-height: 1.5rem;
    text-decoration: none;
    color: #fff;
`;
export default () => {
    return (
        <HomeWrapperCustom>
            <MainWrapper>
                <AppScreenshot alt = "AppScreenshot" src={phone} />
                <AppDescriptionWrapper>
                    <AppDescriptionTitle>Скачай мобильное приложение Aviasales.ru</AppDescriptionTitle>
                    <AppRatingWrapper>
                        <AppRating>
                            <Star alt="Star" src={star} />
                            <Star alt="Star" src={star} />
                            <Star alt="Star" src={star} />
                            <Star alt="Star" src={star} />
                            <HalfStar alt="HalfStar" src={halfstar} />
                        </AppRating>
                        <AppRatingTitle>Более 103 000 оценок</AppRatingTitle>
                    </AppRatingWrapper>
                    <AppPlatformsWrapper>
                        <AppPlatfromColumn>
                           <Icon alt="Apple" src={apple} />
                           <AppLink href="#">iPhone или iPad</AppLink> 
                        </AppPlatfromColumn>
                        <AppPlatfromColumn>
                           <Icon alt="Android" src={android} />
                           <AppLink href="#">Android</AppLink> 
                        </AppPlatfromColumn>
                        <AppPlatfromColumn>
                           <Icon alt="Windows" src={windows} />
                           <AppLink href="#">Windows Phone</AppLink> 
                        </AppPlatfromColumn>
                    </AppPlatformsWrapper>
                </AppDescriptionWrapper>
            </MainWrapper>    
        </HomeWrapperCustom>
    )
}