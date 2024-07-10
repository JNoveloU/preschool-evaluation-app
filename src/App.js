// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/login' component={Login} />
        <Route exact path='/dashboard' component={Dashboard} />
        {/* Agrega más rutas según sea necesario */}
      </Switch>
    </Router>
  );
};

export default App;
