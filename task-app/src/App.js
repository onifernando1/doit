import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      task: { text: "" },
      tasks: [],
    };
  }

  render() {
    const { task, tasks } = this.state;
    return (
      <div>
        <form>
          <label htmlFor="taskInput">Enter task</label>
          <input type="text" id="taskInput"></input>
          <button type="submit">Add task</button>
        </form>
      </div>
    );
  }
}
export default App;
