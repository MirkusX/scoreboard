//initialstate for reducer
export const initialState = {
  home: 0,
  guest: 0,
  fouls: 0,
  period: 0,
  date: "00:00",
};
//reducer
export const reducer = (state, action) => {
  switch (action.type) {
    case "home":
      return { ...state, home: state.home + action.payload };
    case "guest":
      return { ...state, guest: state.guest + action.payload };
    case "resetGuest": {
      return { ...state, guest: (state.guest = 0) };
    }
    case "resetHome": {
      return { ...state, home: (state.home = 0) };
    }
    case "fouls": {
      return { ...state, fouls: state.fouls + action.payload };
    }
    case "resetFouls": {
      return { ...state, fouls: (state.fouls = 0) };
    }
    case "period": {
      return { ...state, period: state.period + action.payload };
    }
    case "resetPeriod": {
      return { ...state, period: (state.period = 0) };
    }
    case "date": {
      return { ...state, date: (state.date = action.payload) };
    }
  }
};
