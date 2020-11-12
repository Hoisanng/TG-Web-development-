import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import './Navbar.css';
import './Main.css';
import './Werk.css';
import './School.css';
import './Activiteiten.css';
import './Interesses.css';
import './Footer.css';
import Maintwee from './Maintwee';
import './Maintwee.css';
import Home from './Home';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <Navbar />
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/main" component={Maintwee} />
      
    </Switch>
    </React.StrictMode>

  </Router>,
  document.getElementById('root')
);


