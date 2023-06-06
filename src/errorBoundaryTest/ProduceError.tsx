export const ProduceError = () => {
  const produceError = () => {
    throw new Error('새롭게 발생한 에러');
  };

  return <button onClick={produceError}>클릭하면 에러 발생!</button>;
};
