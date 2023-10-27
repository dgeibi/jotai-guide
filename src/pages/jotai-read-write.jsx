import { atom, useAtomValue, useSetAtom } from 'jotai';

const countAtom = atom(0);

function Count() {
  const count = useAtomValue(countAtom);
  return <div>count: {count}</div>;
}

function SetCount() {
  const setCount = useSetAtom(countAtom);
  return (
    <div>
      <button onClick={() => setCount((x) => x + 1)}>+1</button>
      {Math.random()}
    </div>
  );
}

export default function App() {
  return (
    <>
      <Count />
      <SetCount />
    </>
  );
}
