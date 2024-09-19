import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {
  const [count, setCount] = useState(0);

  const incrementar = () => {
    setCount(count + 1);
  };
  
  const decrementar = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  
  const reiniciar = () => {
    setCount(0);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Contador: {count}</h1>
        <button onClick={incrementar}>Incrementar</button>
        <button onClick={decrementar}>Decrementar</button>
        <button onClick={reiniciar}>Reiniciar</button>
      </header>
    </div>
  );
}

export default App;
