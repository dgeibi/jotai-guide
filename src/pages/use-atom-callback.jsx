import { atom, useAtomValue } from 'jotai';
import { useAtomCallback } from 'jotai/utils';
import { useCallback } from 'react';

const scoresAtom = atom({
  101: 0,
  102: 0,
});

const scoresAtomView = atom((get) => {
  return JSON.stringify(get(scoresAtom), null, 4);
});

function ScoreView() {
  return useAtomValue(scoresAtomView);
}

export default function App() {
  const setScore = useAtomCallback(
    useCallback((get, set, id, score) => {
      const prevValue = get(scoresAtom);
      set(scoresAtom, {
        ...prevValue,
        [id]: typeof score === 'function' ? score(prevValue[id]) : score,
      });
    }, [])
  );

  return (
    <>
      <pre>
        <ScoreView />
      </pre>
      <div>
        <button
          onClick={() => {
            setScore(101, (prev) => prev + 1);
          }}
        >
          101 + 1
        </button>
        <button
          onClick={() => {
            setScore(102, (prev) => prev + 1);
          }}
        >
          102 + 1
        </button>
      </div>
    </>
  );
}
