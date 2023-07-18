import { SetStateAction, useEffect } from 'react';

interface Props {
  value: number;
  setParentArray: React.Dispatch<SetStateAction<number[]>>;
}

function Child({ value, setParentArray }: Props) {
  useEffect(() => {
    setParentArray((prevArray) => [...prevArray, value]);
  }, []);

  return <li>{value}</li>;
}

export default Child;
