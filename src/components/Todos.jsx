import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeTodo, updateTodos } from '../features/todo/todoSlice';

const TodoApp = () => {
  const todos = useSelector((state) => state.todos); // Access todos from the Redux state
  const dispatch = useDispatch();
  const [editId, setEditId] = useState(null); // Track which todo is being edited
  const [updateText, setUpdateText] = useState(''); // Track updated text

  const handleUpdateTodo = (id) => {
    if (updateText.trim()) {
      dispatch(updateTodos({ id, text: updateText }));
      setEditId(null);
      setUpdateText(''); // Clear the input field after update
    }
  };

  const handleEditClick = (todo) => {
    setEditId(todo.id); // Set the id for editing
    setUpdateText(todo.text); // Pre-fill the input with the current todo text
  };

  return (
    <div className="max-w-lg mx-auto mt-8 bg-gray-900 p-6 rounded-lg shadow-md">
      <h3 className="text-white text-2xl font-semibold mb-4">Your Todos</h3>
      <ul className="list-none space-y-4">
        {todos.map((todo) => (
          <li
            className="flex justify-between items-center bg-gray-800 p-4 rounded-lg shadow-md"
            key={todo.id}
          >
            {editId === todo.id ? (
              <input
                className="text-white bg-gray-700 px-3 py-2 rounded-lg w-full mr-4"
                value={updateText}
                onChange={(e) => setUpdateText(e.target.value)}
                placeholder="Update todo"
              />
            ) : (
              <div className="text-white flex-grow text-lg font-medium tracking-wide mr-6">
                {todo.text}
              </div> // Styled todo text display
            )}
            <div className="flex space-x-2">
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="text-white bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600 transition-all"
              >
                Delete
              </button>
              {editId === todo.id ? (
                <button
                  onClick={() => handleUpdateTodo(todo.id)}
                  className="text-white bg-green-500 px-4 py-2 rounded-lg hover:bg-green-600 transition-all"
                >
                  Save
                </button>
              ) : (
                <button
                  onClick={() => handleEditClick(todo)}
                  className="text-white bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600 transition-all"
                >
                  Edit
                </button>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
