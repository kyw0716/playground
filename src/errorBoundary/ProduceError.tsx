import { useState } from 'react';

export const ProduceErrorWhenClicked = () => {
  const [isErrorOccurred, setIsErrorOccurred] = useState(false);

  if (isErrorOccurred) throw new Error('새롭게 발생한 에러');

  const produceError = () => {
    fetch('그냥 아무 url')
      .then((res) => res.json())
      .catch(() => setIsErrorOccurred(true));
  };

  return <button onClick={produceError}>클릭하면 에러 발생!</button>;
};

export const ProduceErrorWhenRendered = () => {
  throw new Error('ProduceErrorWhenRendered 컴포넌트에서 에러 발생');
};
