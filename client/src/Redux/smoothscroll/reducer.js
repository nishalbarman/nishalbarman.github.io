export const referReducer = (state = () => {}, { type, payload }) => {
  switch (type) {
    case "CREATE_REFER":
      return payload;
    default:
      return state;
  }
};
