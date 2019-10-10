import styled from "styled-components";
export default styled.input`
  color: #4a4a4a;
  background: #fff;
  border: none;
  height: 3rem;
  padding-left: 1rem;
  margin-right: 0.3rem;
  &:placeholder {
    color: #a0b0b9;
    font-size: 16px;
    line-height: 20px;
  }
  @media screen and (max-width: 1136px) {
    margin-bottom: 0.125rem;
    width: 17.25rem;
  }
`;
