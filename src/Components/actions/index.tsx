export const lock = (stat: Boolean) => {
  return {
    type: "LOCK",
    payload: stat,
  };
};
export const winclicked = () => {
  return {
    type: "WINCLICKED",
  };
};
export const reset_winclicked = (stat: Boolean) => {
  return {
    type: "RESET_WINCLICKED",
    payload: stat,
  };
};
export const explorer_clicked = (stat: Boolean) => {
  return {
    type: "EXPLORER_CLICKED",
    payload: stat,
  };
};
