import './App.css';
import React from 'react';
import {Switch, Route } from "react-router-dom";
import Login from '../src/Homepage/Login.js';
import Signup from '../src/Homepage/Signup';
import Test from './test';
import Header from './static/Header';
import Landing from './Homepage/Landing.js';
import Search from './Homepage/Search';
import Favorites from './Favorites/Favorites';
import Results from './Homepage/Results';
import Modal  from './Homepage/Modal';
import ModalIn from './Homepage/Modal';


function App() {
  return (
    <div className="App">
        {/* <Header></Header> */}
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/results" component={Results} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/favorites" component={Favorites} />
        <Route exact path="/test" component={Test} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/modal" component ={ModalIn} />
      </Switch>
    
    </div>
  );
}

export default App;