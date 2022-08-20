import React, { Component } from 'react';
import NewTodoForm from '../NewTodoForm/NewTodoForm';
import Todo from '../Todo/Todo.js';
import { v4 as uuidv4 } from 'uuid';
class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoList: [],
    };
    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.saveChange = this.saveChange.bind(this);
  }

  addTodo(todoContent) {
    this.setState((state) => {
      const id = uuidv4();
      return {
        toDoList: [...state.toDoList, { content: todoContent, id: id }],
      };
    });
  }

  removeTodo(id) {
    this.setState((state) => {
      return {
        toDoList: state.toDoList.filter((todo) => {
          return todo.id !== id;
        }),
      };
    });
  }

  saveChange(id, newContent) {
    const newTodoList = this.state.toDoList.map((todo) => {
      if (todo.id === id) {
        return { ...todo, content: newContent };
      }
      return todo;
    });

    this.setState({
      toDoList: newTodoList,
    });
  }

  render() {
    const tasks = this.state.toDoList.map((todo) => {
      return (
        <Todo
          id={todo.id}
          key={todo.id}
          content={todo.content}
          removeTodo={this.removeTodo}
          editTodo={this.editTodo}
          saveChange={this.saveChange}
        />
      );
    });

    return (
      <main className="TodoList">
        <header className="TodoList__header">
          <h1>All Tasks</h1>
        </header>

        <NewTodoForm addTodo={this.addTodo} />
        
        <ul className="list">{tasks}</ul>
      </main>
    );
  }
}

export default TodoList;
