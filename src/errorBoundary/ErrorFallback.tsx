interface Props {
  error: Error;
  fallbackCallback?: (error?: Error) => void;
}

export const ErrorFallback = ({ error, fallbackCallback }: Props) => {
  return (
    <div>
      <span>{error.message}</span>
      <button onClick={() => fallbackCallback?.(error)}>
        fallbackCallback
      </button>
    </div>
  );
};
