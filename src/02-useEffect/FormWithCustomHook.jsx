import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {
  const { handleFormChange, username, email, password, handleFormReset } =
    useForm({
      username: "",
      email: "",
      password: "",
    });

  const handleFormSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <h1>Form with custom hook</h1>
      <hr />
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          className="form-control"
          name="username"
          placeholder="Username"
          value={username}
          onChange={handleFormChange}
        />
        <input
          type="text"
          className="form-control mt-2"
          name="email"
          placeholder="email@google.com"
          value={email}
          onChange={handleFormChange}
        />
        <input
          type="password"
          className="form-control mt-2"
          name="password"
          placeholder="password"
          value={password}
          onChange={handleFormChange}
        />
        <button className="btn btn-danger mt-2" onClick={handleFormReset}>
          Reset Form
        </button>
      </form>
    </>
  );
};
