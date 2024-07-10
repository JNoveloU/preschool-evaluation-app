// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Planification from './components/Planification';
import Evaluation from './components/Evaluation';
import Reports from './components/Reports';
import Settings from './components/Settings';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/dashboard' element={<Dashboard />} />
          <Route exact path='/planification' element={<Planification />} />
          <Route exact path='/evaluation' element={<Evaluation />} />
          <Route exact path='/reports' element={<Reports />} />
          <Route exact path='/settings' element={<Settings />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
