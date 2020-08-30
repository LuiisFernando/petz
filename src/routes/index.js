import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

import Main from '../pages/Main';
import Details from '../pages/Details';

export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/details" component={Details} />
            </Switch>
        </Router>
    )
}