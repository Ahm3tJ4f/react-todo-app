import React, { Component } from "react";
import { useState } from "react";

const TodoBar = ({ content, removeTodo, id, saveChange }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [content, setContent] = useState(content);

  const handleRemove = () => {
    removeTodo(id);
  };

  const handleChange = (e) => {
    setContent({ [e.target.name]: e.target.value });
  };

  const handleSave = (e) => {
    handleEdit(e);
    saveChange(id, content);
  };

  const handleEdit = (e) => {
    e.preventDefault();
    setIsEdit(!isEdit);
  };

  return (
    <li className="Todo">
      {!isEdit ? (
        <Todo id={id} handleEdit={handleEdit} handleRemove={handleRemove} />
      ) : (
        <label className="list__edit">
          <input
            id={this.props.id}
            type="checkbox"
            className="list__input_hidden"
          />
          <label for={id} className="list__checkbox"></label>

          <input
            name="content"
            type={"text"}
            value={state.content}
            onChange={handleChange}
            className="form__input form__input_small"
          />

          <input
            className="list__input list__input_primary "
            type="submit"
            value="SAVE"
            onClick={handleSave}
          />
        </label>
      )}
    </li>
  );
};

export default TodoBar;
