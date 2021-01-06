import { useState, useEffect } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import './App.css';

function App() {
  const [todosState, setTodosState] = useState({ todos: [] });
  return (
    <div className="App">
      <div className='container'>
        <Header />
        <Main todos={todosState.todos} />
        <Footer />
      </div>
    </div>
  );
}

export default App;