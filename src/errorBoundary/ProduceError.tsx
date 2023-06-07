import { useAsyncErrorBoundary } from '../hooks/useAsyncErrorBoundary';

export const ProduceErrorWhenClicked = () => {
  const { setAsyncErrorToThrow } = useAsyncErrorBoundary();

  const produceError = () => {
    fetch('그냥 아무 url')
      .then((res) => res.json())
      .catch(() =>
        setAsyncErrorToThrow(new Error('비동기 요청에서 발생한 에러'))
      );
  };

  return <button onClick={produceError}>클릭하면 에러 발생!</button>;
};

export const ProduceErrorWhenRendered = () => {
  throw new Error('ProduceErrorWhenRendered 컴포넌트에서 에러 발생');
};
