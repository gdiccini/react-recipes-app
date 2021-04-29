import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';

const renderWithRouter = (ui, context, NameProvider) => {
  const history = createMemoryHistory();
  return ({
    ...render(
      <NameProvider context={ context }>
        <Router
          history={ history }
        >
          {ui}
        </Router>
      </NameProvider>,
    ),
    history,
  });
};

export default renderWithRouter;
