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
  }
};
