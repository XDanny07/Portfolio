var stat = false;
var showWinExplorer = (state = stat, action: any) => {
  switch (action.type) {
    case "EXPLORER_CLICKED":
      return action.payload;
    default:
      return state;
  }
};

export default showWinExplorer;
