import { useState } from "react";

const style = {
  width: "100%",
  backgroundColor: "#FFF",
  padding: 16,
  fontSize: 24,
  fontStyle: "italic",
  fontWeight: 300,
  border: "none",
};

const TodoForm = ({ createTodo }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    createTodo(title);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* <form onSubmit={event => handleSubmit(event)}> */}
      <input
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        style={style}
        placeholder="What do you need to do?"
      />
    </form>
  );
};

export default TodoForm;
