import { useMemo, useState } from 'react';
import { useFetch } from '../hooks/useFetch';

interface Arg {
  method: 'GET' | 'POST' | 'DELETE' | 'PUT';
  body?: BodyInit;
}

export const ShowApiResponse = () => {
  const [count, setCount] = useState(0);

  const { response } = useFetch<string>(
    '/api/suspense',
    useMemo<Arg>(() => ({ method: 'GET' }), [])
  );

  return (
    <div>
      <div>{response}</div>
      <div>{count}</div>
      <button onClick={() => setCount((current) => current + 1)}>+1</button>
    </div>
  );
};
