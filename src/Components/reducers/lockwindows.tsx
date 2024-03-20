var stat = false;
const lockWindows = (state = stat, action: any) => {
  switch (action.type) {
    case "LOCK":
      return action.payload;
    default:
      return state;
  }
};
export default lockWindows;
