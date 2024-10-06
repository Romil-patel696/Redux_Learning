import './App.css';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center p-6">
      <h2 className="text-white text-3xl font-semibold mb-8">To Dos</h2>
      <AddTodo />
      <Todos />
    </div>
  );
}

export default App;
