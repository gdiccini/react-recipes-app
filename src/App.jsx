import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MealsProvider } from './context/MealsContext';
import { DrinksProvider } from './context/DrinksContext';
import AllRoutes from './components/AllRoutes';

function App() {
  return (
    <MealsProvider>
      <DrinksProvider>
        <AllRoutes />
      </DrinksProvider>
    </MealsProvider>
  );
}

export default App;
