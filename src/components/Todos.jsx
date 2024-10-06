import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeTodo, updateTodos } from '../features/todo/todoSlice'; // Import necessary actions

const TodoApp = () => {
  const todos = useSelector((state) => state.todos); // Access todos from the Redux state
  const dispatch = useDispatch();
  const [editId, setEditId] = useState(null); // Track which todo is being edited
  const [updateText, setUpdateText] = useState(''); // Track updated text

  const handleUpdateTodo = (id) => {
    dispatch(updateTodos({ id, text: updateText })); // Dispatch action to update todo
    setEditId(null); // Exit edit mode after updating
    setUpdateText(''); // Clear the input field after update
  };

  return (
    <>
      <div>Todos</div>
      <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >
            {editId === todo.id ? (
              <input
                className="text-white bg-gray-700 px-2 py-1 rounded"
                value={updateText}
                onChange={(e) => setUpdateText(e.target.value)}
                placeholder="Update todo"
              />
            ) : (
              <div className="text-white">{todo.text}</div>
            )}
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
            >
              Delete
            </button>
            {editId === todo.id ? (
              <button
                onClick={() => handleUpdateTodo(todo.id)}
                className="text-white bg-green-500 border-0 py-1 px-4 focus:outline-none hover:bg-green-600 rounded text-md ml-2"
              >
                Save
              </button>
            ) : (
              <button
                onClick={() => {
                  setEditId(todo.id); // Set the id for editing
                  setUpdateText(todo.text); // Pre-fill the input with the current text
                }}
                className="text-white bg-blue-500 border-0 py-1 px-4 focus:outline-none hover:bg-blue-600 rounded text-md ml-2"
              >
                Edit
              </button>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodoApp;
