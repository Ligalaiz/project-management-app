import React from 'react';

const errorFallback = ({
  error,
  resetErrorBoundary,
}: {
  error: Error;
  resetErrorBoundary: (...args: Array<unknown>) => void;
}) => {
  return (
    <div role="alert" data-testid="errorFallback">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary} data-testid="fallbackBtn">
        Try again
      </button>
    </div>
  );
};

export { errorFallback };
