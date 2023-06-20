import { useState } from 'react';
import { useAsyncErrorBoundary } from '../../hooks/useAsyncErrorBoundary';
import { convertFetchResponseToJsonOrError } from '../../utils/fetch/handleFetchResponse';

// Suspense 내부에서 Promise 객체가 throw 되면 fallback이 트리거 된다.
export const SuspenseFallbackTest = () => {
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [data, setData] = useState('');

  const { throwErrorAtRenderTime } = useAsyncErrorBoundary();

  if (isButtonClicked)
    throw new Promise<string>((resolve) => {
      fetch('/api/suspense?case=fail')
        .then(convertFetchResponseToJsonOrError<string>(throwErrorAtRenderTime))
        .then((data) => {
          resolve(data);
        })
        .catch((error) => throwErrorAtRenderTime(error));
    }).then((resolvedValue) => {
      setData(resolvedValue);
      setIsButtonClicked(false);
    });

  return (
    <>
      {data === '' ? (
        <button onClick={() => setIsButtonClicked(true)}>
          누르면 Promise 객체 반환
        </button>
      ) : (
        <div>{data}</div>
      )}
    </>
  );
};
