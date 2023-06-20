interface Props {
  error: Error;
  fallbackCallback: () => void;
}

export const ErrorFallback = ({ error, fallbackCallback }: Props) => {
  return (
    <div>
      <span>{error.message}</span>
      <button onClick={() => fallbackCallback()}>재시도</button>
    </div>
  );
};
