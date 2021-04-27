import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';
import Provider from './context/Provider';
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

function App() {
  return (
    <Provider>
      <Router>
        <Switch>
          <Route path="/perfil" component={ Profile } />
          <Route exact path="/" component={ Login } />
          <Route exact path="/comidas" component={ Foods } />
          <Route exact path="/bebidas" component={ Drinks } />
          <Route exact path="/explorar" component={ Explore } />
          <Route exact path="/explorar/comidas" component={ ExploreFoods } />
          <Route exact path="/explorar/bebidas" component={ ExploreDrinks } />
          <Route
            exact
            path="/explorar/comidas/ingredientes"
            component={ ExploreFoodsIngredients }
          />
          <Route
            exact
            path="/explorar/bebidas/ingredientes"
            component={ ExploreDrinksIngredients }
          />
          <Route exact path="/explorar/comidas/area" component={ ExploreFoodByOrigin } />
          <Route exact path="/receitas-feitas" component={ RecipesDone } />
          <Route exact path="/receitas-favoritas" component={ FavoriteRecipes } />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
