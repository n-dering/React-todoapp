import React from "react";

class Addform extends React.Component {
  constructor() {
    super();
    this.state = { text: "", id: "" };
  }

  HandleChange = (e) => {
    this.setState({ text: e.target.value });
    this.setState({ id: this.props.id });
  };
  prefent = (e) => {
    e.preventDefault();
  };

  HandleSubmit = (e) => {
    e.preventDefault();
    this.props.AddTodo(this.state);
    this.setState({ text: "" });
  };
  render() {
    return (
      <div className="bottom">
        <form
          onSubmit={this.state.text !== "" ? this.HandleSubmit : this.prefent}
        >
          <input
            type="text"
            onChange={this.HandleChange}
            placeholder="Add task"
            value={this.state.text}
          />
        </form>
      </div>
    );
  }
}
export default Addform;
