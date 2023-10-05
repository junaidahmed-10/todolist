import React, { useState } from 'react';

function TodoList() {
  // State to manage the list of tasks and the current task input
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');

  // Function to handle changes in the task input
  const handleTaskInputChange = (e) => {
    setTaskInput(e.target.value);
  };

  // Function to add a new task to the list
  const addTask = () => {
    if (taskInput.trim() !== '') {
      setTasks([...tasks, taskInput]);
      setTaskInput('');
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          placeholder="Enter a task"
          value={taskInput}
          onChange={handleTaskInputChange}
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
