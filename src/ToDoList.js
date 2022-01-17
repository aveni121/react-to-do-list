import "./ToDoList.css";
import React from "react";

class ToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        {
          id: 1,
          name: "Do the dishes",
          isDone: false,
        },
        {
          id: 2,
          name: "Clean my room",
          isDone: true,
        },
      ],
    };
  }

  handleTaskUpdate(taskToUpdate) {
    this.setState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.map((task) => {
          if (task.id === taskToUpdate.id) {
            return { ...task, isDone: !task.isDone };
          }

          return task;
        }),
      };
    });
  }

  render() {
    const tasks = this.state.tasks;
    const columns = [
      { title: "To Do", tasks: tasks.filter((task) => !task.isDone) },
      { title: "Done", tasks: tasks.filter((task) => task.isDone) },
      { title: "All", tasks },
    ];
    return (
      <div className="container-fluid text-center">
        <div>
          <h1>To-Do List</h1>
        </div>
        <div>
          <input type="text" />
          <span>Create</span>
        </div>
        <div className="row">
          {columns.map((col) => (
            <div className="col-4">
              <div>{col.title}</div>
              <div>
                {col.tasks.map((task) => (
                  <div onClick={() => this.handleTaskUpdate(task)}>
                    <input type="checkbox" checked={task.isDone}></input>
                    <span>{task.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default ToDoList;
