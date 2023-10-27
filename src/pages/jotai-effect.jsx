import { atom, useAtom, useAtomValue } from "jotai";
import { atomEffect } from "jotai-effect";

const countAtom = atom(0);

const autoCountEffect = atomEffect((get, set) => {
  const timer = setInterval(() => {
    set(countAtom, (prev) => prev + 1);
  }, 1e3);
  return () => {
    clearInterval(timer);
  };
});

const loggingEffect = atomEffect((get) => {
  // jotai@2.4.3 log 0...1...2...
  // jotai@2.5.0 log 0 only
  console.log(get(countAtom));
});

export default function App() {
  useAtom(autoCountEffect);
  useAtom(loggingEffect);
  return useAtomValue(countAtom);
}
