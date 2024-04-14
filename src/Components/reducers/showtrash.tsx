var stat = false;
const showtrash = (state = stat, action: any) => {
  switch (action.type) {
    case "TRASH_CLICKED":
      return action.payload;
    default:
      return state;
  }
};
export default showtrash;
