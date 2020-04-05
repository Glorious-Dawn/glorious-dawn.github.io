import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,
    Switch,
    Route,
    Link} from "react-router-dom";
import {GachaTool} from "./GachaTool";

function App() {
  return (
    <Router>
        <Switch>
            <Route path='/'>
                <GachaTool/>
            </Route>
            <Route path='/gacha_tool'>
                <GachaTool/>
            </Route>
        </Switch>
    </Router>
  );
}

export default App;
