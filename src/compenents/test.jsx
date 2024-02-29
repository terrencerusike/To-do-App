import React, { useState } from "react";
import "./TaskForm.css";
import Tag from "./Tag";

const TaskForm = () => {
  const [main, setMenu] = useState({
    task: "",
    status: "todo",
  });

  const handleTaskChange = (event) => {
    setMenu(event.target.value);
  };

  console.log(task, status);

  return (
    <header className="app_header">
      <form>
        <input
          type="text"
          name="task"
          className="task_input"
          placeholder="Enter your task"
          onChange={handleTaskChange}
        />

        <div className="task_form_bottom_line">
          <div>
            <Tag name="HTML" />
            <Tag name="CSS" />
            <Tag name="JavaScript" />
            <Tag name="React" />
          </div>

          <div>
            <select
              className="task_status"
              name="status"
              onChange={handleTaskChange}
            >
              <option value="todo">Todo</option>
              <option value="doing">Doing</option>
              <option value=" Done">Done</option>
            </select>
            <button type="submit" className="task_submit">
              + Add Task
            </button>
          </div>
        </div>
      </form>
    </header>
  );
};
