import React, { Component } from "react";
import Todos from "./Todos";

class App extends Component {
  state = {
    inputValue: "",
    todos: [
      { id: 1, name: "Uradi domaci", show: true },
      { id: 2, name: "Uradi trening", show: true },
    ],
  };
  handleChange = (e) => {
    this.setState({ inputValue: e.target.value });
    let todos = this.state.todos;
    todos.forEach((element) => {
      if (
        element.name.toUpperCase().indexOf(e.target.value.toUpperCase()) > -1
      ) {
        element.show = true;
      } else {
        element.show = false;
      }
    });
    this.setState({ todos: todos });
    console.log(this.state.todos);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let newTodo = {
      id: this.state.todos.length + 1,
      name: this.state.inputValue,
      show: true,
    };
    let todos = this.state.todos;
    todos.push(newTodo);
    this.setState({ todos: todos });
    console.log(todos);
  };
  removeItem = (e) => {
    let todos = this.state.todos.filter(function (todo) {
      return todo.id != e.target.id;
    });
    this.setState({ todos: todos });
  };
  render() {
    return (
      <div className="container">
        <h1 className="center">Todo List</h1>
        <form action="" onSubmit={this.handleSubmit}>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.inputValue}
          />
        </form>

        <Todos
          todoItems={this.state.todos}
          removeItem={this.removeItem}
        ></Todos>
      </div>
    );
  }
}

export default App;
