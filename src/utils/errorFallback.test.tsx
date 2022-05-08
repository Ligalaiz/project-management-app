import React from 'react';

import { errorFallback } from './errorFallback.utils';

import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const resetErrorBoundary = jest.fn();

const renderComponent = () => render(errorFallback({ error: new Error('error message'), resetErrorBoundary }));

describe('ErrorFallback component', () => {
  describe('ErrorFallback exist', () => {
    it('errorFallback check that the component has been rendered', () => {
      const { queryByTestId } = renderComponent();
      const errorF = queryByTestId('errorFallback');

      expect(errorF).toBeInTheDocument();
    });
  });

  describe('Works component', () => {
    it('form check that handler has been called', () => {
      const { getByTestId } = renderComponent();
      const btn = getByTestId('fallbackBtn');

      userEvent.click(btn);

      expect(resetErrorBoundary).toHaveBeenCalled();
    });
  });
});
