import React from "react";

class List extends React.Component {
  constructor() {
    super();
    this.state = { checked: false };
  }

  render() {
    return this.props.showlist.map((todo, id) => {
      return (
        <label key={id}>
          {" "}
          <p key={id}>
            {todo.text} <input type="checkbox" />
            <input type="button" onClick={() => this.props.DeleteTodo(id)} />
          </p>
        </label>
      );
    });
  }
}

export default List;
