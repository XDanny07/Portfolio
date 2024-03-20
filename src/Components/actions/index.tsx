export const lock = (stat: Boolean) => {
  return {
    type: "LOCK",
    payload: stat,
  };
};
