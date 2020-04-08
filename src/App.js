import React from 'react';
import './App.scss';
import Store from './/components/Store'
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cart from './components/Cart';

function App() {

  return (
    <div className="App">
      <Router>
      <NavBar></NavBar>
        <Switch>
          <Route exact path="/" component={Store} />
          <Route exact path="/cart" component={Cart} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
