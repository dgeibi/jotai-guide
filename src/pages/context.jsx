import { useState, createContext, useContext } from 'react';

const CountContext = createContext();

export default function ContextDemo() {
  return (
    <CountContext.Provider value={useState(0)}>
      <Child />
      <OtherChild />
    </CountContext.Provider>
  );
}

function Child() {
  const [count, setCount] = useContext(CountContext);
  return (
    <div>
      count: {count}
      <button
        onClick={() => {
          setCount((x) => x + 1);
        }}
      >
        +1
      </button>
    </div>
  );
}

function OtherChild() {
  return Math.random();
}
