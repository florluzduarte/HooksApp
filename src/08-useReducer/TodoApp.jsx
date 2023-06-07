//Components
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";

//Hoooks
import { useTodos } from "../hooks/useTodos";

export const TodoApp = () => {
  const {
    todos,
    handleDeleteTodo,
    handleNewTodo,
    handleToggleTodo,
    todoCount,
    pendingTodosCount,
  } = useTodos();

  return (
    <>
      <h1>
        TodoApp: {todoCount}, <small>pendientes: {pendingTodosCount}</small>
      </h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            onDeleteTodo={handleDeleteTodo}
            onToggleTodo={handleToggleTodo}
          />
        </div>

        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          <TodoAdd onNewTodo={handleNewTodo} />
        </div>
      </div>
    </>
  );
};
