import { atom, useAtom } from 'jotai';

export default function App() {
  return (
    <>
      <Child />
      <OtherChild />
    </>
  );
}

const countAtom = atom(0);

function Child() {
  const [count, setCount] = useAtom(countAtom);
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
