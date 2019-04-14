import React from 'react';
import { BrowserRouter, Route, Switch} from "react-router-dom";
import {
    Routine,
    Move, SetTime
} from '../pages';

const AppNavigator = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Routine} />
            <Route exact path="/move" component={Move} />
            <Route exact path="/settime" component={SetTime} />
        </Switch>
    </BrowserRouter>
)

export { AppNavigator };
