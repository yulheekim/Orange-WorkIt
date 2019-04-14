import React from 'react';
import { BrowserRouter, Route, Switch} from "react-router-dom";
import {
    Routine,
    Move,
    Login,
    Addroutine
} from '../pages';

const AppNavigator = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Routine} />
            <Route exact path="/move" component={Move} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/routine" component={Routine} />
            <Route exact path="/addroutine" component={Addroutine} />
        </Switch>
    </BrowserRouter>
)

export { AppNavigator };
