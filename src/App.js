import React, { Fragment } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/home';




const Nav = () => (
  <BrowserRouter>
    <Fragment>
      <Route exact path="/" component={Home}></Route>
      {/* {false && <Redirect to="/Home"/>} */}
    </Fragment>
  </BrowserRouter>
)

export default Nav;
