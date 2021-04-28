import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { MealsProvider } from './context/MealsContext';
import { DrinksProvider } from './context/DrinksContext';
import Login from './pages/Login';
import Foods from './pages/Foods';
import Drinks from './pages/Drinks';
import Profile from './pages/Profile';
import Explore from './pages/Explore';
import ExploreFoods from './pages/ExploreFoods';
import ExploreDrinks from './pages/ExploreDrinks';
import ExploreFoodsIngredients from './pages/ExploreFoodsIngredients';
import ExploreDrinksIngredients from './pages/ExploreDrinksIngredients';
import ExploreFoodByOrigin from './pages/ExploreFoodByOrigin';
import RecipesDone from './pages/RecipesDone';
import FavoriteRecipes from './pages/FavoriteRecipes';
import FoodDetails from './pages/FoodDetails';
import DrinkDetails from './pages/DrinkDetails';

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
              component={ ExploreFoodsIngredients }
              path="/explorar/comidas/ingredientes"
            />
            <Route path="/explorar/comidas/area" component={ ExploreFoodByOrigin } />
            <Route path="/explorar/comidas/" component={ ExploreFoods } />
            <Route
              path="/explorar/bebidas/ingredientes"
              component={ ExploreDrinksIngredients }
            />
            <Route path="/explorar/bebidas" component={ ExploreDrinks } />
            <Route path="/explorar" component={ Explore } />
            <Route path="/comidas/:id" component={ FoodDetails } />
            <Route path="/bebidas/:id" component={ DrinkDetails } />
            <Route path="/comidas" component={ Foods } />
            <Route path="/bebidas" component={ Drinks } />
            <Route exact path="/" component={ Login } />
          </Switch>
        </Router>
      </DrinksProvider>
    </MealsProvider>
  );
}

export default App;
