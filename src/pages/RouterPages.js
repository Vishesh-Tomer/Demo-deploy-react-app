import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './Home'
import About from './About'
import Menu from './Menu';
import OurUpadtes from './OurUpadtes';


export default function RouterPages() {
  return (
    <div>
        <Router>
            <Switch>
                <Route path="/" exact component = {Home} />
                <Route path="/about" exact component = {About} />
                <Route path="/menu" exact component = {Menu} />
                <Route path="/ourupdates" exact component = {OurUpadtes} />
            </Switch>
        </Router>
    </div>
  )
}
