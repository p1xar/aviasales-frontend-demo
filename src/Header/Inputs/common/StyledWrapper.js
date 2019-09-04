import styled from "styled-components";
export default styled.div`
  & .react-autosuggest__input {
    color: #4a4a4a;
    background: #fff;
    border: none;
    border-radius: 0.3rem 0 0 0.3rem;
    height: 3rem;
    padding-left: 1rem;
    margin-right: 0.3rem;
    position: relative;
    &:placeholder {
      color: #a0b0b9;
      font-size: 16px;
      line-height: 20px;
    }
    @media screen and (max-width: 1135px) {
      margin-bottom: 0.125rem;
      width: 17.25rem;
    }
    @media screen and (max-width: 1400px) {
      border-radius: 0.3rem 0.3rem 0 0;
    }
    @media screen and (min-width: 601px) and (max-width: 1120px) {
      border-radius: 0.3rem 0 0 0;
    }
  }
  & .react-autosuggest__suggestions-container {
    position: absolute;
    min-width: 98%;
    margin-top: 0.1rem;
    box-shadow: 0px 0px 8px rgba(74, 74, 74, 0.2),
      0px 2px 4px rgba(74, 74, 74, 0.2);
    border-radius: 2px;
    z-index: 4;
    background: #fff;
  }
  & .react-autosuggest__suggestions-list {
    padding: 0;
    margin: 0;
    list-style-type: none;
  }
  & .react-autosuggest__suggestion {
    cursor: pointer;
    font-style: normal;
    font-size: 0.875rem;
    line-height: 1.125rem;
    max-width: 100%;
    display: flex;
    align-items: center;
    height: 3rem;
    padding-left: 1rem;
    &:nth-child(2n) {
      background: #f4f4f4;
    }
  }
`;
