import { useState } from 'react';
import { useFetch } from '../hooks/useFetch';

export const ProduceErrorWhenClicked = () => {
  const [아무URL요청] = useFetch('dd');
  const [data, setData] = useState('');

  const produceError = async () => {
    const 결과값 = await 아무URL요청<string>('아무 URL', 'GET');

    if (결과값) setData(결과값);
  };

  return <button onClick={produceError}>클릭하면 에러 발생!</button>;
};

export const ProduceErrorWhenRendered = () => {
  throw new Error('ProduceErrorWhenRendered 컴포넌트에서 에러 발생');
};
