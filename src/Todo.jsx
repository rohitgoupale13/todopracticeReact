import "./Todo.css";
import { useState } from "react";
import { IoMdCheckmark } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";

export const Todo = () => {
  const [inputValue, setInputValue] = useState("");
  const [task, setTask] = useState([]);

  const handleInputChange = (value) => {
    setInputValue(value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (!inputValue) return;
    if (task.includes(inputValue)) {
      setInputValue("");
      return;
    }
    setTask((prev) => [...prev, inputValue]);
    setInputValue("");
  };

  return (
    <section className="todo-container">
      <header>
        <h1>Todo List</h1>
      </header>
      <section className="form">
        <form onSubmit={handleFormSubmit}>
          <div>
            <input
              type="text"
              className="todo-input"
              autoComplete="off"
              value={inputValue}
              onChange={(event) => handleInputChange(event.target.value)}
            />
          </div>
          <div>
            <button type="submit" className="todo-btn">
              Add Task
            </button>
          </div>
        </form>
      </section>
      <section className="myUnOrderList">
        <ul>
          {task.map((currntTask, index) => (
            <li key={index} className="todo-item">
              <span>{currntTask}</span>
              <button className="check-btn">
                <IoMdCheckmark />
              </button>
              <button className="delete-btn">
                <MdDeleteForever />
              </button>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
};
