import React, { createContext } from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';

export const MockContext = createContext();

export const renderWithRouter = (ui, context) => {
  const history = createMemoryHistory();
  return ({
    ...render(
      <MockContext.Provider value={ context }>
        <Router
          history={ history }
        >
          {ui}
        </Router>
      </MockContext.Provider>,
    ),
    history,
  });
};

export default renderWithRouter;
