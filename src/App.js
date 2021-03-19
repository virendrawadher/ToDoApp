import "./styles.css";
import { useState } from "react";
import uuid from "react-uuid";


function ToDoApp() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  function addHanlder() {
    const taskObj = { id: uuid(), name: task, isStrike: false };
    setTaskList([...taskList, taskObj]);
    setTask("");
  }
  function taskHandler(e) {
    setTask(e.target.value);
  }

  function completeHandler(tasks) {
    return function () {
      setTaskList((prev) =>
        prev.map((item) =>
          item.id === tasks.id ? { ...item, isStrike: !item.isStrike } : item
        )
      );
    };
  }
  return (
    <>
      <h1 className="Heading">To Do App</h1>
      <div className="td-container">
        <input
          value={task}
          placeholder="Enter the task.."
          onChange={taskHandler}
          className="td-input"
        />
        <button className="td-btn" onClick={addHanlder}>
          Add
        </button>
      </div>
      <table className="td-table">
        {taskList.map((tasks) => {
          return (
            <tbody className="td-tbody">
              <td className="td-tdata">
                <input
                  type="checkbox"
                  onClick={completeHandler(tasks)}
                  key={tasks.id}
                  value={tasks.name}
                  className="td-checkbox"
                />
              </td>
              <td className="td-tdata-data">
                <span
                  style={{
                    textDecoration: tasks.isStrike ? "line-through" : "none"
                  }}
                  className="td-tdata-span"
                >
                  {tasks.name}
                </span>
              </td>
              {/* </div> */}
            </tbody>
          );
        })}
      </table>
      
    </>
  );
}

export default function App() {
  return (
    <div className="App">
      <ToDoApp />
    </div>
  );
}
