export const ListItem = ({ todo, onDeleteTodo, onToggleTodo }) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span
        className={`align-self-center ${
          todo.done ? "text-decoration-line-through" : ""
        }`}
      >
        {todo.description}
      </span>
      <div>
        <button
          className={`btn ${todo.done ? "btn-success" : "btn-outline-primary"}`}
          onClick={() => onToggleTodo(todo.id)}
        >
          {todo.done ? "Done" : "Pending"}
        </button>
        <button
          className="btn btn-danger"
          onClick={() => onDeleteTodo(todo.id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
};
