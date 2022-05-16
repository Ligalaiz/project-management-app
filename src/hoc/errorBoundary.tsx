import { ComponentType } from 'react';
import { withErrorBoundary } from 'react-error-boundary';

import { errorFallback } from '@utils/errorFallback.utils';

const errorBoundary = <P extends object>(Component: ComponentType<P>) =>
  withErrorBoundary(Component, {
    FallbackComponent: errorFallback,
    onError(error) {
      console.log({ error });
    },
  });

export { errorBoundary };
