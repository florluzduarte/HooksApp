import { ListItem } from "./ListItem";

export const TodoList = ({ todos }) => {
  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <ListItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};
