import React, { useState } from 'react';
import './TodoList.css'

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

type TodoListProps = {
  todos: Todo[];
  onSubtaskSubmit: (parentId: number, newSubtask: string) => void;
};

function TodoList({ todos, onSubtaskSubmit }: TodoListProps) {
  const [newSubtask, setNewSubtask] = useState('');
  const [expandedTodoId, setExpandedTodoId] = useState<number | null>(null);

  const handleSubtaskChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewSubtask(e.target.value);
  };

  const handleSubtaskSubmit = (e: React.FormEvent<HTMLFormElement>, parentId: number) => {
    e.preventDefault();
    if (!newSubtask) return;
    onSubtaskSubmit(parentId, newSubtask);
    setNewSubtask('');
  };

  const handleTodoClick = (todoId: number) => {
    setExpandedTodoId(todoId === expandedTodoId ? null : todoId);
  };

  return (
    <ul className="todo-list">
  {todos.map((todo) => (
    <li key={todo.id}>
      <div className="todo-header" onClick={() => handleTodoClick(todo.id)}>
        <input type="checkbox" checked={todo.completed} />
        <span className={todo.completed ? "completed" : ""}>{todo.task}</span>
      </div>
      {expandedTodoId === todo.id && (
        <form className="subtask-form" onSubmit={(e) => handleSubtaskSubmit(e, todo.id)}>
          <input className="subtask-input" type="text" value={newSubtask} onChange={handleSubtaskChange} placeholder="Add subtask" />
          <button className="subtask-button" type="submit">Add Subtask</button>
          <ul className="subtask-list">
            {todo.subtasks.map((subtask, index) => (
              <li key={index}>
                <input type="checkbox" checked={subtask.completed} />
                <span className={subtask.completed ? "completed" : ""}>{subtask.task}</span>
              </li>
            ))}
          </ul>
        </form>
      )}
    </li>
  ))}
</ul>

  );
}

export default TodoList;
