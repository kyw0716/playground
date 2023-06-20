import { useState } from 'react';

export const useAsyncErrorBoundary = () => {
  const [error, setError] = useState<Error | null>(null);

  if (error !== null) throw error;

  return { throwErrorAtRenderTime: setError };
};
