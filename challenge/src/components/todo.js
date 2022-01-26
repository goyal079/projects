import React, { Component } from "react";
import axios from "axios";
class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskname: "",
      taskList: [],
      deadline: "",
    };
  }
  componentDidMount = async () => {
    try {
      let tasks = await axios.get("/api/todos/");
      tasks = tasks.data;
      this.setState({ taskname: "", deadline: "", taskList: tasks.TODO });
    } catch (error) {
      console.log(error);
    }
  };
  addTask = async (e) => {
    e.preventDefault();
    try {
      let dt = new Date(`${this.state.deadline}`);
      await axios.post("/api/todos/add", {
        taskname: this.state.taskname,
        deadline: dt,
      });
      let tasks = await axios.get("/api/todos/").then((res) => {
        return res.data;
      });
      this.setState({ taskname: "", deadline: "", taskList: tasks.TODO });
    } catch (error) {
      console.log(error);
    }
  };
  deleteTask = async (e) => {
    try {
      let tasks = this.state.taskList.filter((todo) => todo._id != e.target.id);
      this.setState({ taskList: tasks });
      await axios.delete(`/api/todos/delete/${e.target.id}`);
    } catch (error) {
      console.log(error);
    }
  };
  doneTask = async (e) => {
    try {
      let edited = this.state.taskList.findIndex(
        (task) => task._id == e.target.id
      );
      let newList = this.state.taskList;
      newList[edited].isDone = !newList[edited].isDone;
      this.setState({ taskList: newList });
      const dead = newList[edited].deadline.split("T")[0];
      await axios.put(`/api/todos/edit/${e.target.id}`, {
        taskname: newList[edited].taskname,
        deadline: dead,
        isDone: newList[edited].isDone,
      });
    } catch (error) {
      console.log(error);
    }
  };
  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };
  render() {
    const iconStyle = {
      width: "4.5rem",
      fontSize: "15px",
      display: "flex",
      justifyContent: "space-around",
    };
    const done = {
      border: "2px solid green",
    };
    return (
      <>
        <h2>Todo App</h2>
        <form id="form" onSubmit={this.addTask}>
          <label htmlFor="taskname">
            <input
              type="text"
              name="todo"
              id="taskname"
              value={this.state.taskname}
              className="ip"
              placeholder="   +Enter a Task"
              onChange={this.handleChange}
            />
            <input
              type="datetime-local"
              id="deadline"
              value={this.state.deadline}
              onChange={this.handleChange}
            />
            <button className="add" type="submit">
              <i className="fa fa-plus"></i>
            </button>
          </label>
        </form>
        <ol id="task-list">
          {this.state.taskList.map((todo) => {
            return (
              <li
                key={todo._id}
                style={todo.isDone ? done : {}}
                className="todo"
              >
                {todo.isDone ? (
                  <strike className="todo-text">{todo.taskname}</strike>
                ) : (
                  <p className="todo-text" style={{ display: "inline" }}>
                    {todo.taskname}
                  </p>
                )}

                <div style={iconStyle}>
                  {" "}
                  <span className="del">
                    <i
                      className="fa fa-times"
                      style={{ color: "red" }}
                      id={todo._id}
                      // i have used the same id for both the handlers, i think thats the wrong way to do it, same goes for using the _id
                      onClick={this.deleteTask}
                    ></i>
                  </span>
                  <span className="done">
                    <i
                      className="fa fa-check"
                      style={{ color: "green" }}
                      onClick={this.doneTask}
                      id={todo._id}
                    ></i>
                  </span>
                </div>
              </li>
            );
          })}
        </ol>
      </>
    );
  }
}

export default Todo;
