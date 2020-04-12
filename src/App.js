import React from 'react';

import {
    HashRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import {GachaToolPage} from "./GachaToolPage";
import {HomePage} from "./HomePage";
import {CollectionToolPage} from "./CollectionToolPage";

export default function App() {
    return (
        <Router>
            <Switch>
                <Route path="/collection">
                    <CollectionToolPage/>
                </Route>
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