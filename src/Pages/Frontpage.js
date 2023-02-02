import { useReducer, useRef } from "react";
import {
  StyledButton,
  StyledDiv,
  StyledH1,
  StyledH2,
  StyledSection,
} from "../Components/StyledComponents";
import { initialState, reducer } from "../Components/useReducer";

export const Frontpage = () => {
  let interval = useRef();
  const [state, dispatch] = useReducer(reducer, initialState);
  const add = (team, points) => {
    dispatch({ type: team, payload: points });
  };
  const newGame = () => {
    dispatch({ type: "resetGuest" });
    dispatch({ type: "resetHome" });
    dispatch({ type: "resetFouls" });
    dispatch({ type: "resetPeriod" });
    dispatch({ type: "date", payload: 0 });
  };
  const start = Date.now();
  const timer = () => {
    let difference = Date.now() - start;
    let secs = Math.floor(difference / 1000);
    dispatch({ type: "date", payload: secs });
  };
  const startTimer = () => {
    interval.current = setInterval(timer, 1000);
  };
  const stopTimer = () => {
    clearInterval(interval.current);
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
      <StyledSection column>
        <StyledButton onClick={() => newGame()}>New Game</StyledButton>
        <StyledDiv row>
          <div>
            <StyledH1>Fouls</StyledH1>
            <StyledDiv>
              <StyledH2>{state.fouls}</StyledH2>
            </StyledDiv>
            <StyledDiv foulsButtonDiv>
              <StyledButton onClick={() => add("fouls", 1)}>+1</StyledButton>
            </StyledDiv>
          </div>
          <div>
            <StyledH1>Peroids</StyledH1>
            <StyledDiv>
              <StyledH2>{state.period}</StyledH2>
            </StyledDiv>
            <StyledDiv foulsButtonDiv>
              <StyledButton onClick={() => add("period", 1)}>+1</StyledButton>
            </StyledDiv>
          </div>
        </StyledDiv>
        <StyledH1>Timer</StyledH1>
        <StyledDiv>
          <StyledH2>{state.date}</StyledH2>
        </StyledDiv>
        <StyledDiv foulsButtonDiv>
          <StyledButton onClick={() => startTimer()}>Start</StyledButton>
          <StyledButton onClick={() => stopTimer()}>Stop</StyledButton>
        </StyledDiv>
      </StyledSection>
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
