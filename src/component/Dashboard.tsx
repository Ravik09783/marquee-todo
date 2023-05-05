import React, { useState } from 'react';
import TodoList from './TodoList';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css'

type Subtask = {
  task: string;
  completed: boolean;
};

interface DashboardProps {
  userData: any;
}

type Todo = {
  id: number;
  task: string;
  completed: boolean;
  subtasks: Subtask[];
};

function Dashboard({ userData }: DashboardProps) {
  const [newTask, setNewTask] = useState('');
  const [todos, setTodos] = useState<Todo[]>([]);
  const navigate = useNavigate()
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

  const logout =()=>{
    localStorage.clear();
    navigate('/login')
    window.location.reload();
  }

  console.log("55555",userData)

  return (
    <div>
      <div className='logout-btn'>
        <button onClick={logout}>Logout</button>
      </div>
    <div className='user-profile'>
      <div className='card'>
        <div className='card-header'>
          <h4>Welcome to the Dashboard</h4>
        </div>
        <div className='card-body'>
          <p>{userData[0]?.name}</p>
          <p>{userData[0]?.email}</p>
        </div>
      </div>
    </div>
  
    <div className='dashboard-container'>
      
  
      <div className='dashboard'>
        <h1>Todo List</h1>
        <form onSubmit={handleNewTaskSubmit}>
          <input
            type='text'
            value={newTask}
            onChange={handleNewTaskChange}
            placeholder='Add new task'
          />
          <button type='submit'>Add Task</button>
        </form>
        <TodoList todos={todos} onSubtaskSubmit={handleSubtaskSubmit} />
      </div>
    </div>
    </div>
  );
}

export default Dashboard;
