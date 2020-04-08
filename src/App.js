import React from 'react';

import {
    HashRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import {GachaToolPage} from "./GachaToolPage";
import {HomePage} from "./HomePage";

export default function App() {
    return (
        <Router>
            <Switch>
                <Route path="/gacha">
                    <GachaToolPage/>
                </Route>
                <Route path='/' exact>
                    <HomePage/>
                </Route>
            </Switch>
        </Router>
    );
}