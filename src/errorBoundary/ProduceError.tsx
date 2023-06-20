import { useAsyncErrorBoundary } from '../hooks/useAsyncErrorBoundary';

export const ProduceErrorWhenClicked = () => {
  const { setAsyncErrorToThrow } = useAsyncErrorBoundary();
  const produceError = async () => {
    const error = new Error('클릭해서 발생한 에러');

    setAsyncErrorToThrow(error);
  };

  return (
    <>
      <button onClick={produceError}>클릭하면 에러 발생!</button>
    </>
  );
};

export const ProduceErrorWhenRendered = () => {
  throw new Error('ProduceErrorWhenRendered 컴포넌트에서 에러 발생');
};
