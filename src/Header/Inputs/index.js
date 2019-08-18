import React from 'react';
import styled from 'styled-components';
import arrow from './arrow.svg';
import date from './date.svg';
import shape from './shape.svg';
import plane from './plane.svg';

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
        margin-bottom: 5.5rem;
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
    display: flex;
    justify-content: center;
    
    margin-top: 1rem;
    @media screen and (max-width: 20rem) {
        flex-direction: column;
        align-items: center;
    }
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
        padding-top: 1rem;
        padding-bottom: 1rem;
        padding-left: 3.25rem;
        padding-right: 4.9rem; 
        font-size: 1.5rem;
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
        top: -2.3rem;
        right: initial;
        left: 6.5rem;    
    }
`;

export default() => {
    return (
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
    );
};