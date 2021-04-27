import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';
import Provider from './context/Provider';
import Login from './pages/Login';

function App() {
  return (
    <Provider>
      <Router>
        <Switch>
          {/* <Route path="/perfil" component={ Profile } /> */}
          <Route exact path="/" component={ Login } />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
