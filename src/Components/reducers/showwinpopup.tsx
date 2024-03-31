var stat = false;
const showwinpopup = (state = stat, action: any) => {
  switch (action.type) {
    case "WINCLICKED":
      return !state;
    case "RESET_WINCLICKED":
      return action.payload;
    default:
      return state;
  }
};
export default showwinpopup;
