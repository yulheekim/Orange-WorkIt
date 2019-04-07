import React from 'react';
import { BrowserRouter, Route, Switch} from "react-router-dom";
import {
    Routine,
    Move
} from '../pages';

const AppNavigator = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Routine} />
            <Route exact path="/move" component={Move} />
        </Switch>
    </BrowserRouter>
)

export { AppNavigator };
