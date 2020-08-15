// Let's a give a initiale state to our data Layer

export const inistialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  //   token: null,
};

const reducer = (state, action) => {
  //Printing action as a debugging tools
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      //Login for each action

      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};

export default reducer;
