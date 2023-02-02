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
    dispatch({ type: "resetFouls" });
    dispatch({ type: "resetPeriod" });
  };
  const timer = () => {
    let start = Date.now();
    setInterval(() => {
      let difference = Date.now() - start;
      let secs = Math.floor(difference / 1000);
      dispatch({ type: "date", payload: secs });
    }, 1000);
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
        <StyledH1>Fouls</StyledH1>
        <StyledDiv>
          <StyledH2>{state.fouls}</StyledH2>
        </StyledDiv>
        <StyledDiv foulsButtonDiv>
          <StyledButton onClick={() => add("fouls", 1)}>+1</StyledButton>
        </StyledDiv>
        <StyledH1>Peroids</StyledH1>
        <StyledDiv>
          <StyledH2>{state.period}</StyledH2>
        </StyledDiv>
        <StyledDiv foulsButtonDiv>
          <StyledButton onClick={() => add("period", 1)}>+1</StyledButton>
        </StyledDiv>
        <StyledH1>Timer</StyledH1>
        <StyledDiv>
          <StyledH2>{state.date}</StyledH2>
        </StyledDiv>
        <StyledDiv foulsButtonDiv>
          <StyledButton onClick={() => timer()}>Start</StyledButton>
        </StyledDiv>
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
