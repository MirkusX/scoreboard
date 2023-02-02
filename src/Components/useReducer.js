export const initialState = {
  home: 0,
  guest: 0,
};

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
  }
};
