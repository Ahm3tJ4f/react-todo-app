import React, { Component } from "react";
import NewTodoForm from "../NewTodoForm/NewTodoForm";
import Todo from "../Todo/Todo";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

const TodoList = () => {
  const [toDoList, setList] = useState([]);
  function addTodo(todoContent) {
    const id = uuidv4();
    setList([...toDoList, { content: todoContent, id: id }]);
  }

  function removeTodo(id) {
    setList((state) => {
      return {
        toDoList: state.toDoList.filter((todo) => {
          return todo.id !== id;
        }),
      };
    });
  }

  const saveChange = (id, newContent) => {
    const newTodoList = this.state.toDoList.map((todo) => {
      if (todo.id === id) {
        return { ...todo, content: newContent };
      }
      return todo;
    });

    this.setState({
      toDoList: newTodoList,
    });
  };

  const tasks = toDoList.map((todo) => {
    return (
      <Todo
        id={todo.id}
        key={todo.id}
        content={todo.content}
        removeTodo={removeTodo}
        saveChange={saveChange}
      />
    );
  });

  return (
    <main className=" ">
      <header className="text-4xl">
        <h1>All Tasks</h1>
      </header>

      <NewTodoForm addTodo={addTodo} />

      <ul className="list">{tasks}</ul>
    </main>
  );
};

export default TodoList;
