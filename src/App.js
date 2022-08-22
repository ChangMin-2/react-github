import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        {/* count값이 보여지는 곳 */}
        <h3 data-testid="counter">{count}</h3>
          <div>
            {/* 클릭시 count 값 1증가 */}
            <button data-testid="plus-button"
            onClick={() => setCount((count) => count + 1 )}>+</button>
             {/* 클릭시 count 값 1감소 */}
            <button data-testid="minus-button"
            onClick={() => setCount((count) => count - 1 )}>-</button>
          </div>
      </header>
    </div>
  );
}

export default App;
