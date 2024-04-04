var stat = false;
const showResume = (state = stat, action: any) => {
  switch (action.type) {
    case "RESUME_CLICKED":
      return action.payload;
    default:
      return state;
  }
};
export default showResume;
