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
  //starting state for timer
  let secs = 0;
  let minutes = 0;
  //ref for interval
  let interval = useRef();
  //import reducer function and state
  const [state, dispatch] = useReducer(reducer, initialState);
  //reusable function for adding points
  const add = (team, points) => {
    dispatch({ type: team, payload: points });
  };
  //resets all points
  const newGame = () => {
    dispatch({ type: "resetGuest" });
    dispatch({ type: "resetHome" });
    dispatch({ type: "resetFouls" });
    dispatch({ type: "resetPeriod" });
    dispatch({ type: "date", payload: "00:00" });
  };

  //timer function
  const timer = () => {
    secs++;
    if (secs === 60) {
      minutes = +1;
      secs = 0;
    }
    let overallTime = `${minutes}:${secs}`;
    dispatch({ type: "date", payload: overallTime });
  };
  //function for starting timer
  const startTimer = () => {
    clearInterval(interval.current);
    interval.current = setInterval(timer, 1000);
  };
  //function for stopping timer
  const stopTimer = () => {
    clearInterval(interval.current);
  };

  return (
    <>
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
        <StyledDiv timerDiv>
          <StyledButton onClick={() => startTimer()}>Start</StyledButton>
          <StyledButton onClick={() => stopTimer()}>Stop</StyledButton>
        </StyledDiv>
      </StyledSection>
    </>
  );
};
