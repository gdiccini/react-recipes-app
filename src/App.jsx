import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { MealsProvider } from './context/MealsContext';
import { DrinksProvider } from './context/DrinksContext';
import Login from './pages/Login';
import Meals from './pages/Meals';
import Drinks from './pages/Drinks';
import Profile from './pages/Profile';
import Explore from './pages/Explore';
import ExploreMeals from './pages/ExploreMeals';
import ExploreDrinks from './pages/ExploreDrinks';
import ExploreMealsIngredients from './pages/ExploreMealsIngredients';
import ExploreDrinksIngredients from './pages/ExploreDrinksIngredients';
import ExploreMealsByOrigin from './pages/ExploreMealsByOrigin';
import RecipesDone from './pages/RecipesDone';
import FavoriteRecipes from './pages/FavoriteRecipes';

function App() {
  return (
    <MealsProvider>
      <DrinksProvider>
        <Router>
          <Switch>
            <Route path="/receitas-feitas" component={ RecipesDone } />
            <Route path="/receitas-favoritas" component={ FavoriteRecipes } />
            <Route path="/perfil" component={ Profile } />
            <Route
              component={ ExploreMealsIngredients }
              path="/explorar/comidas/ingredientes"
            />
            <Route path="/explorar/comidas/area" component={ ExploreMealsByOrigin } />
            <Route path="/explorar/comidas" component={ ExploreMeals } />
            <Route
              path="/explorar/bebidas/ingredientes"
              component={ ExploreDrinksIngredients }
            />
            <Route path="/explorar/bebidas" component={ ExploreDrinks } />
            <Route path="/explorar" component={ Explore } />
            <Route path="/comidas" component={ Meals } />
            <Route path="/bebidas" component={ Drinks } />
            <Route exact path="/" component={ Login } />
          </Switch>
        </Router>
      </DrinksProvider>
    </MealsProvider>
  );
}

export default App;
