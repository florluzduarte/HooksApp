import { useForm } from "../hooks/useForm";

export const TodoAdd = ({ onNewTodo }) => {
  const { description, handleFormChange, handleFormReset } = useForm({
    description: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (description.length <= 1) return;

    const todo = {
      id: new Date().getTime(),
      description: description,
      done: false,
    };

    onNewTodo(todo);
    handleFormReset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="¿Qué hay que hacer?"
        value={description}
        name="description"
        className="form-control"
        onChange={handleFormChange}
      />
      <button type="submit" className="btn btn-outline-primary mt-3">
        Agregar
      </button>
    </form>
  );
};
