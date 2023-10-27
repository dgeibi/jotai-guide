import { useAtomsDevtools } from 'jotai-devtools';

export const AtomsDevtools = ({ children }) => {
  useAtomsDevtools('jotai');
  return children;
};
