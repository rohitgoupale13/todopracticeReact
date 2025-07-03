import "./Todo.css";
import { useEffect, useState } from "react";
import { IoMdCheckmark } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";

export const Todo = () => {
  const [inputValue, setInputValue] = useState("");
  const [task, setTask] = useState([]);
  const [time, setTime] = useState(new date());

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
  useEffect(() => {
        const timerId = setInterval(() => {
          setTime(new Date());
        }, 1000); // Update every second

        // Cleanup function to clear the interval when the component unmounts
        return () => clearInterval(timerId);
      }, []);
  // date and time
  // const now = new Date();
  // const formatDate= now.toLocaleDateString();
  // const hour= now.getHours() ;
  // const min=now.getMinutes();
  // const sec= now.getSeconds(); 
 
  return (
    <section className="todo-container">
      <header>
        <h1>Todo List</h1>
        <h2 className="date-time">{time.toLocaleTimeString()}</h2>
        {/* <h2 className="date-time"> {time}</h2> */}
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
