import { atom, useAtomValue } from 'jotai';
import { useState } from 'react';
const countAtom = atom(1);

const derivedAtom = atom((get) => {
  return (
    <div>
      {Math.random()} {get(countAtom)}
    </div>
  );
});

function Derived() {
  return useAtomValue(derivedAtom);
}

export default function App() {
  const [mount, setMount] = useState(false);
  return (
    <>
      挂载
      <input
        type="checkbox"
        onChange={(e) => {
          setMount(e.target.checked);
        }}
        checked={mount}
      />
      {mount ? (
        <>
          <Derived />
          <Derived />
          <Derived />
          <Derived />
        </>
      ) : null}
    </>
  );
}
