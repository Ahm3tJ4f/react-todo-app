import React, { Component, useState } from "react";

const NewTodoForm = ({ addTodo }) => {
  const [todo, setTodo] = useState("");

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(todo);
    setTodo("");
  };

  return (
    <form className="form NewTodoForm" onSubmit={handleSubmit}>
      <input
        className="form__input form__input_large"
        name="todo"
        type="text"
        value={todo}
        onChange={handleChange}
        required
        autoComplete="off"
        placeholder="Add a new task inside ‘All’ category"
      />
    </form>
  );
};

export default NewTodoForm;
