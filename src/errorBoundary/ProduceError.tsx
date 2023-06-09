import { useState } from 'react';
import { useFetch } from '../hooks/useFetch';

export const ProduceErrorWhenClicked = () => {
  const [unknownRequest] = useFetch('dd');
  const [data, setData] = useState('');

  const produceError = async () => {
    const unknownResult = await unknownRequest<string>('아무 URL', 'GET');

    setData(unknownResult);
  };

  return (
    <>
      <button onClick={produceError}>클릭하면 에러 발생!</button>
      <div>{data}</div>
    </>
  );
};

export const ProduceErrorWhenRendered = () => {
  throw new Error('ProduceErrorWhenRendered 컴포넌트에서 에러 발생');
};
