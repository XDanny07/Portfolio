var stat = {
  show: false,
  title: "",
  msg: "",
};
const showerrordiag = (state = stat, action: any) => {
  switch (action.type) {
    case "ERROR_TRIGGERED":
      return action.payload;
    default:
      return state;
  }
};
export default showerrordiag;
