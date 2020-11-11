import TodoForm from './components/forms/TodoForm';
import CurrentTasksList from './components/itemsLists/CurrentTasksList';

import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className="App__title">My TODO list</h1>
      <TodoForm/>
      <CurrentTasksList/>
    </div>
  );
}

export default App;
