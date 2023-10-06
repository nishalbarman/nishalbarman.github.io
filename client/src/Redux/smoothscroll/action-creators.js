export const setUseRefs = (func) => {
  return { type: "CREATE_REFER", payload: func };
};
