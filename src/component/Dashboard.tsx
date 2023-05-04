// import React from 'react'

// export const Dashboard = () => {
//   return (
//     <div>Dashboard</div>
//   )
// }


import React, { useState } from 'react';
import './Dashboard.css';

interface Todo {
  id: number;
  task: string;
  completed: boolean;
}

const Dashboard: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTask, setNewTask] = useState<string>('');

  const handleNewTaskChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask(event.target.value);
  };

  const handleNewTaskSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (newTask.trim() === '') {
      return;
    }
    const newTodo: Todo = {
      id: Date.now(),
      task: newTask,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setNewTask('');
  };

  return (
    <div className="todo-list-container">
      <h1>Todo List</h1>
      <form onSubmit={handleNewTaskSubmit}>
        <input type="text" value={newTask} onChange={handleNewTaskChange} placeholder="Add new task" />
        <button type="submit">Add Task</button>
      </form>
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id}>
            <input type="checkbox" />
            <span className="todo-task">{todo.task}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;


