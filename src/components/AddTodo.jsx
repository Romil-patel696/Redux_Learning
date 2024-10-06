import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';

function AddTodo() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (input.trim()) {
      dispatch(addTodo({ input })); // Make sure text is passed correctly
      setInput('');
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-12 bg-gray-900 p-6 rounded-lg shadow-md">
      <form onSubmit={addTodoHandler} className="flex space-x-3">
        <input
          type="text"
          className="bg-gray-800 rounded-lg border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-2 px-4 flex-grow transition-colors duration-200 ease-in-out"
          placeholder="Enter a Todo..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="text-white bg-indigo-600 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-700 rounded-lg text-lg shadow-md transition-all"
        >
          Add Todo
        </button>
      </form>
    </div>
  );
}

export default AddTodo;
