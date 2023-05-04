const initialState = [
  {
    id: 1,
    todo: "Darle de comer a gathijas",
    done: false,
  },
];

const todoReducer = (state = initialState, action = {}) => {
  if (action.type === "[TODO] add todo") {
    return [...state, action.payload];
  }

  return state;
};

let todos = todoReducer();

const newTodo = {
  id: 2,
  todo: "Hornear pan",
  done: false,
};

const addNewTodo = {
  type: "[TODO] add todo",
  payload: newTodo,
};

todos = todoReducer(todos, addNewTodo);
console.log(todos);
