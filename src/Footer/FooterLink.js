import styled from "styled-components";

export default styled.a`
  font-style: normal;
  font-weight: normal;
  font-size: 0.75rem;
  line-height: 1rem;
  text-decoration: none;
  color: #5b5b5c;
  margin-top: ${props => props.top};
  margin-right: ${props => props.right};
`;
