export const todoReducer = (initialState, action = {}) => {
  switch (action.type) {
    case "abc":
      throw new Error("El caso abc aún no está definido");

    default:
      return initialState;
  }
};
