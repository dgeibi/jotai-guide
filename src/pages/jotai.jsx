import { atom, useAtom } from 'jotai';
const countAtom = atom(0);

export default function JotaiDemo() {
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
