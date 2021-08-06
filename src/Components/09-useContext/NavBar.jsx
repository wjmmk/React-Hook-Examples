import React from 'react';
import {Link, NavLink} from 'react-router-dom';

const NavBar = () => {
    return (
      <>
        <h2 className="text-warning bg-dark">!!! PROBANDO CON LOS HOOK !!!</h2>
        {/* <nav>
          <ul>
            <li>
               <Link to='/'>HomePage</Link> 
            </li>
            <li>
                <Link to='/about'>AboutPage</Link>
            </li>
            <li>
                <Link to='/login'>LoginPage</Link>
            </li>
          </ul>
        </nav> */}
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">UseContext</Link>
            
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink exact activeClassName="active" className="nav-link" aria-current="page" to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink exact activeClassName="active" className="nav-link" to="/about">About</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink exact activeClassName="active" className="nav-link" to="/login">Login</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
}

export default NavBar
