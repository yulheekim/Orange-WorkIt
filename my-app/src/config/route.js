import React from 'react';
import { BrowserRouter, Route, Switch} from "react-router-dom";
import {
    Routine,
    Routines,
    Login,
    Move,
    Addroutine,
    Addmove
} from '../pages';

const AppNavigator = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/routines" component={Routines} />
            <Route exact path="/moves" component={Routine} />
            <Route exact path="/timer" component={Move} />
            <Route exact path="/addroutine" component={Addroutine} />
            <Route exact path="/addmove" component={Addmove} />
        </Switch>
    </BrowserRouter>
)

export { AppNavigator };
