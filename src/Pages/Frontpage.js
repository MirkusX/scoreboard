import { useReducer } from "react";
import { initialState, reducer } from "../Components/useReducer";

export const Frontpage = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const add = (team, points) => {
    dispatch({ type: team, payload: points });
  };
  return (
    <section>
      <div>
        <h1>Home</h1>
        <div>
          <h2>{state.home}</h2>
        </div>
        <div>
          <button onClick={() => add("home", 1)}>+1</button>
          <button onClick={() => add("home", 2)}>+2</button>
          <button onClick={() => add("home", 3)}>+3</button>
        </div>
      </div>
      <div>
        <h1>Guest</h1>
        <div>
          <h2>{state.guest}</h2>
        </div>
        <div>
          <button onClick={() => add("guest", 1)}>+1</button>
          <button onClick={() => add("guest", 2)}>+2</button>
          <button onClick={() => add("guest", 3)}>+3</button>
        </div>
      </div>
    </section>
  );
};
