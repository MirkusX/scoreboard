import { useReducer } from "react";
import {
  StyledButton,
  StyledDiv,
  StyledH1,
  StyledH2,
  StyledSection,
} from "../Components/StyledComponents";
import { initialState, reducer } from "../Components/useReducer";

export const Frontpage = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const add = (team, points) => {
    dispatch({ type: team, payload: points });
  };
  const newGame = () => {
    dispatch({ type: "resetGuest" });
    dispatch({ type: "resetHome" });
  };
  return (
    <StyledSection>
      <div>
        <StyledH1>Home</StyledH1>
        <StyledDiv>
          <StyledH2>{state.home}</StyledH2>
        </StyledDiv>
        <StyledDiv buttonDiv>
          <StyledButton onClick={() => add("home", 1)}>+1</StyledButton>
          <StyledButton onClick={() => add("home", 2)}>+2</StyledButton>
          <StyledButton onClick={() => add("home", 3)}>+3</StyledButton>
        </StyledDiv>
      </div>
      <div>
        <StyledButton onClick={() => newGame()}>New Game</StyledButton>
      </div>
      <div>
        <StyledH1>Guest</StyledH1>
        <StyledDiv>
          <StyledH2>{state.guest}</StyledH2>
        </StyledDiv>
        <StyledDiv buttonDiv>
          <StyledButton onClick={() => add("guest", 1)}>+1</StyledButton>
          <StyledButton onClick={() => add("guest", 2)}>+2</StyledButton>
          <StyledButton onClick={() => add("guest", 3)}>+3</StyledButton>
        </StyledDiv>
      </div>
    </StyledSection>
  );
};
