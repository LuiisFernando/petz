import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
} from 'react-router-dom';

import Route from './Route';

import Main from '../pages/Main';
import Details from '../pages/Details';

export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/details/:id" component={Details} />
            </Switch>
        </Router>
    )
}