import { useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "Florencia",
    email: "florencia@google.com",
  });

  const { username, email } = formState;

  const handleFormChange = ({ target }) => {
    const { value, name } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <>
      <h1>Simple Form</h1>
      <hr />
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

      {username === "Florencia2" && <Message />}
    </>
  );
};
