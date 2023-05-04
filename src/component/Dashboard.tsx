import React, { useState } from 'react';
import TodoList from './TodoList';

type Subtask = {
  task: string;
  completed: boolean;
};

type Todo = {
  id: number;
  task: string;
  completed: boolean;
  subtasks: Subtask[];
};

function Dashboard() {
  const [newTask, setNewTask] = useState('');
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleNewTaskChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask(e.target.value);
  };

  const handleNewTaskSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!newTask) return;
    const newTodo = { id: Date.now(), task: newTask, completed: false, subtasks: [] };
    setTodos([...todos, newTodo]);
    setNewTask('');
  };

  const handleSubtaskSubmit = (parentId: number, newSubtask: string) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === parentId) {
          return { ...todo, subtasks: [...todo.subtasks, { task: newSubtask, completed: false }] };
        }
        return todo;
      })
    );
  };

  return (
    
<div className="dashboard">
      <h1>Todo List</h1>
      <form onSubmit={handleNewTaskSubmit}>
        <input type="text" value={newTask} onChange={handleNewTaskChange} placeholder="Add new task" />
        <button type="submit">Add Task</button>
      </form>
      <TodoList todos={todos} onSubtaskSubmit={handleSubtaskSubmit} />
    </div>
  );
}

export default Dashboard;
