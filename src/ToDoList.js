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

  render() {
    const tasks = this.state.tasks;
    const columns = [
      { title: "To Do", tasks: tasks.filter((task) => !task.isDone) },
      { title: "Done", tasks: tasks.filter((task) => task.isDone) },
      { title: "All", tasks },
    ];
    return (
      <React.Fragment>
        <div>
          <h1>To-Do List</h1>
        </div>
        <div>
          <input type="text" />
          <span>Create</span>
        </div>
        <div>
          {columns.map((col) => (
            <React.Fragment>
              <div>{col.title}</div>
              <div>
                {col.tasks.map((task) => (
                  <React.Fragment>
                    <input type="checkbox" checked={task.isDone}></input>
                    <span>{task.name}</span>
                  </React.Fragment>
                ))}
              </div>
            </React.Fragment>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default ToDoList;
