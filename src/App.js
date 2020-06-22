import React from "react";
import List from "./List";

import "./App.css";
import Addform from "./Addform";

class App extends React.Component {
  constructor() {
    super();

    this.state = { todos: [{ id: 0, text: "sad" }] };
  }
  AddTodo = (todo) => {
    let todos = [...this.state.todos, todo];
    this.setState({ todos: todos });
    this.setState({ id: this.state.id + 1 });
  };

  DeleteTodo = (id) => {
    console.log(id);
    this.setState(this.state.todos.splice(id, 1));
  };

  render() {
    return (
      <div className="main">
        <div className="top ">
          <span>
            <label>
              <List
                showlist={this.state.todos}
                DeleteTodo={this.DeleteTodo}
                IsChecked={this.IsChecked}
              />
            </label>
          </span>
        </div>
        <Addform AddTodo={this.AddTodo} id={this.state.id} />
      </div>
    );
  }
}

export default App;
