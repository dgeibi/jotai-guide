import { useContext } from 'react';
import { memo } from 'react';
import { useState } from 'react';
import { createContext } from 'react';

const CountContext = createContext();
const CountSetContext = createContext();

const Count = memo(function Count() {
  const count = useContext(CountContext);
  return <div>count: {count}</div>;
});

const Button = memo(function Button() {
  const setCount = useContext(CountSetContext);

  return (
    <div>
      <button
        onClick={() => {
          setCount((x) => x + 1);
        }}
      >
        +1
      </button>
      {Math.random()}
    </div>
  );
});

export default function ContextDemo() {
  const [count, setCount] = useState(0);
  return (
    <CountSetContext.Provider value={setCount}>
      <CountContext.Provider value={count}>
        <Count />
        <Button />
      </CountContext.Provider>
    </CountSetContext.Provider>
  );
}
