import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from '../pages/Login';
import Meals from '../pages/Meals';
import Drinks from '../pages/Drinks';
import Profile from '../pages/Profile';
import Explore from '../pages/Explore';
import ExploreMeal from '../pages/ExploreMeal';
import ExploreDrink from '../pages/ExploreDrink';
import ExploreMealIngredients from '../pages/ExploreMealIngredients';
import ExploreDrinkIngredients from '../pages/ExploreDrinkIngredients';
import ExploreMealByOrigin from '../pages/ExploreMealByOrigin';
import RecipesDone from '../pages/RecipesDone';
import FavoriteRecipes from '../pages/FavoriteRecipes';
import Details from '../pages/Details';
import NotFound from '../pages/NotFound';
import MealInProgress from '../pages/MealInProgres';

export default function AllRoutes() {
  return (
    <Router>
      <Switch>
        <Route path="/receitas-feitas" component={ RecipesDone } />
        <Route path="/receitas-favoritas" component={ FavoriteRecipes } />
        <Route path="/perfil" component={ Profile } />
        <Route
          component={ ExploreMealIngredients }
          path="/explorar/comidas/ingredientes"
        />
        <Route path="/explorar/comidas/area" component={ ExploreMealByOrigin } />
        <Route path="/explorar/bebidas/area" component={ NotFound } />
        <Route path="/explorar/comidas/" component={ ExploreMeal } />
        <Route
          path="/explorar/bebidas/ingredientes"
          component={ ExploreDrinkIngredients }
        />
        <Route path="/explorar/bebidas" component={ ExploreDrink } />
        <Route path="/explorar" component={ Explore } />
        <Route path="/comidas/:id/in-progress" component={ MealInProgress } />
        <Route path="/comidas/:id" component={ Details } />
        <Route path="/bebidas/:id" component={ Details } />
        <Route path="/comidas" component={ Meals } />
        <Route path="/bebidas" component={ Drinks } />
        <Route exact path="/" component={ Login } />
      </Switch>
    </Router>
  );
}
