import { useState } from 'react';

export const useAsyncErrorBoundary = () => {
  const [error, setError] = useState<Error | null>(null);

  console.log(error);

  if (error !== null) throw error;

  return { throwErrorAtRenderTime: setError };
};
