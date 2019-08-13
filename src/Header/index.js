import React from 'react';
import styled from 'styled-components';
import logo from './logo.svg';
import arrow from './arrow.svg';
import date from './date.svg';
import shape from './shape.svg';
import plane from './plane.svg';
import { NavLink } from 'react-router-dom';

const Header = styled.div`
    background: linear-gradient(151.09deg, #00B0DE 0.36%, #01AEDC 4.04%, #02ABDB 7.77%, #02ABDB 11.48%, #02ABDB 11.7%, #196EBD 100%);
`;

const Logo = styled.img`
    padding-left: 6.625rem;
    padding-top: 1.1875rem;
    @media screen and (max-width: 48rem) {
        padding-left: 0.5rem;
    }
`;

const LogoText = styled(NavLink)`
    display: none;
    @media screen and (min-width: 48rem) {
        display: block;
        font-style: normal;
        font-weight: 300;
        font-size: 1.25rem;
        position: absolute;
        left: 9.5rem;
        top: 1.25rem;
        line-height: 1.5625rem;
        color: #fff;
        text-decoration: none;
    }
    @media screen and (min-width: 20.0625rem) and (max-width: 48rem) {
        display: block;
        font-style: normal;
        font-weight: 300;
        font-size: 1.25rem;
        position: absolute;
        left: 3.125rem;
        top: 1.25rem;
        line-height: 1.5625rem;
        color: #fff;
        text-decoration: none;
    }   
`;

const HeaderContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 15.875rem;
    @media screen and (max-width: 20rem) {
        margin-top: 2rem;
    }
    @media screen and (min-width: 20.0625rem) and (max-width: 48rem) {
        margin-top: 2.625rem;
    }
`;

const HeaderTitle = styled.h1`
    font-style: normal;
    font-weight: 500;
    font-size: 2.5rem;
    line-height: 0.625rem;
    color: #fff;
    text-align: center;
    @media screen and (max-width: 20rem) {
        font-size: 1.25rem;
        line-height: 1.4375rem;
        padding: 0 0.375rem;
    }
    @media screen and (min-width: 20.0625rem) and (max-width: 48rem) {
        font-size: 2rem;
        line-height: 3rem;
    }
`;

const HeaderTitleForm = styled.h2`
    font-style: normal;
    font-weight: bold;
    font-size: 1.5rem;
    line-height: 0.625rem;
    color: #fff;
    text-align: center;
    @media screen and (max-width: 20rem) {
        display: none;
    }
    @media screen and (min-width: 20.0625rem) and (max-width: 48rem) {
        font-size: 1.25rem;
        line-height: 1.4375rem;
    }
`;

const FormWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center; 
    align-items: center;
    flex-wrap: wrap;
    margin-top: 2.5rem;
    margin-bottom: 15.875rem;
    @media screen and (max-width: 20rem) {
        margin-top: 1rem;
    }
    @media screen and (min-width: 20.0625rem) and (max-width: 48rem) {

    }
`;

const FormContainer = styled.div`
    display: inline;
    position: relative;
`;
const StyledInput = styled.input`
    color: #4A4A4A;
    background: #fff;
    border: none;
    height: 3rem;
    padding-left: 1rem;
    margin-right: 0.3rem;
    &:placeholder {
        color: #A0B0B9;
        font-size: 16px;
        line-height: 20px;
    }
    @media screen and (max-width: 20rem) {
        margin-bottom: 0.125rem;
        width: 17.25rem;
    }
    
`;
const FromInput = styled(StyledInput)`
    height: 3rem;
    border-radius: .3rem 0 0 .3rem;
    color: #4A4A4A;
    position: relative;
    @media screen and (max-width: 20rem) {
        border-radius: .3rem .3rem 0 0;
    }
`;
const Icon = styled.img`
    position: absolute;
    width: 1rem;
    height: 1.125rem;
    right: 1.5rem;
    top: 1rem;
`;

const ArrowIcon = styled(Icon)``;

const ToInput = styled(StyledInput)`

`;

const DatePickerTo = styled(StyledInput)`
    @media screen and (max-width: 20rem) {
        width: 8.02rem;
        margin-right: 0.15rem;
    }
`;

const DatePickerBack = styled(StyledInput)`
    @media screen and (max-width: 20rem) {
        width: 7.99rem;
    }
`;

const Passangers = styled(StyledInput)`
    border-radius: 0 0.3rem 0.3rem 0;
    padding-right: 2rem;
    cursor: pointer;
    @media screen and (max-width: 20rem) {
        border-radius: 0 0 0.3rem 0.3rem;
        padding-right: 0;
    }
`;

const DateIcon = styled(Icon)``;

const ShapeIcon = styled(Icon)`
    width: 0.625rem;
`;

const CustomFormContainer = styled(FormContainer)`
    flex-basis: 100%;
    display: inline-flex;
    justify-content: center;
    margin-top: 3rem;
`;

const SearchButton = styled.a`
    background: #FF9241;
    color: white;
    border: 0;
    border-radius: 0.25rem;
    font-style: normal;
    font-weight: 600;
    font-size: 1.75rem;
    line-height: 2.0625rem;
    padding-left: 2.8125rem;
    padding-top: 0.9375rem;
    padding-bottom: 1rem;
    padding-right: 4.625rem;
    text-decoration: none;
    @media screen and (max-width: 20rem) {
        padding-left: 3.25rem;
        padding-right: 5.875rem;
        padding-top: 0.875rem;
        padding-bottom: 0.8125rem;
        font-size: 1.1rem;
        line-height: 1.5rem;
    }
`;

const PlaneIcon = styled(Icon)`
    width: 1.585rem;
    height: 1.305rem;
    top: 1.4rem;
    right: 2.5rem;
    position: relative;
    @media screen and (max-width: 20rem) {
        
    }
`;

export default () => {
    return (
        <Header>
            <Logo alt='Logo' src={logo} />
            <LogoText to="/">aviasales</LogoText> 
            <HeaderContent>
                <HeaderTitle>Поиск дешевых авиабилетов</HeaderTitle>
                <HeaderTitleForm>Лучший способ купить авиабилеты дешево</HeaderTitleForm>
                <FormWrapper>
                    <FormContainer>
                        <FromInput placeholder="Отправление"/>
                        <ArrowIcon alt='Arrow' src={arrow} />
                    </FormContainer>
                   <FormContainer>
                        <ToInput placeholder="Прибытие"/>
                    </FormContainer>
                    <FormContainer>
                        <DatePickerTo placeholder="Туда" />
                        <DateIcon alt="Date" src={date} />
                    </FormContainer>
                    <FormContainer>
                        <DatePickerBack placeholder="Обратно" />
                        <DateIcon alt="Date" src={date} />
                    </FormContainer>
                    <FormContainer>
                        <Passangers placeholder="1 пассажир, эконом"readOnly/>
                        <ShapeIcon alt="Triangle" src={shape} />
                    </FormContainer>
                    <CustomFormContainer>
                        <SearchButton href="/">
                            Найти билеты
                        </SearchButton>
                        <PlaneIcon alt="Plane" src={plane} />   
                    </CustomFormContainer>   
                </FormWrapper>
            </HeaderContent>      
        </Header>
    )
}