import styled from "styled-components";

export const StyledSection = styled.section`
  display: flex;
  justify-content: space-around;
`;

export const StyledDiv = styled.div`
  background-color: #080001;
  color: #f94f6d;
  padding: 0.5em 1.5em;
  margin-bottom: 1em;
  ${(props) => {
    if (props.buttonDiv)
      return `
    background: inherit;
    color: inherit;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: space-between;`;
  }}
`;

export const StyledH2 = styled.h2`
  font-size: 5.625rem;
  margin: 0;
`;

export const StyledH1 = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 0;
  color: #eeeeee;
`;

export const StyledButton = styled.button`
  background-color: inherit;
  border: #9aabd8 solid 1px;
  color: #9aabd8;
  border-radius: 5px;
  font-size: 1.125rem;
  padding: 0.5em;
`;
