import React from 'react';
import { BrowserRouter, Route, Switch} from "react-router-dom";
import {
    Routine,
    Routines,
    Login,
    Move
} from '../pages';

const AppNavigator = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/routines" component={Routines} />
            <Route exact path="/moves" component={Routine} />
            <Route exact path="/timer" component={Move} />
        </Switch>
    </BrowserRouter>
)

export { AppNavigator };
