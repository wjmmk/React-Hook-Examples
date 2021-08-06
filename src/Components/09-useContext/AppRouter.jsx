import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
  import AboutPage from './AboutPage';
  import LoginPage from './LoginPage';
  import HomePage from './HomePage';
import NavBar from './NavBar';
  
const AppRouter = () => {
    return (
        <Router>
         <div>
         <NavBar />  
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route exact path="/about" component= {AboutPage} />
            <Route exact path="/login" component= {LoginPage} />
            <Route exact path="/" component= {HomePage} />
            <Redirect to="/" />
          </Switch>
        </div>
      </Router>
    )
}

export default AppRouter
