import React from 'react';
import { BrowserRouter, Route, Switch} from "react-router-dom";
import {
    Routine,
    Move,
    Login,
    Addroutine,
    Addmove,
    SetTime
} from '../pages';

const AppNavigator = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Routine} />
            <Route exact path="/move" component={Move} />
            <Route exact path="/settime" component={SetTime} />
            <Route exact path="/timer" component={Move} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/routine" component={Routine} />
            <Route exact path="/addroutine" component={Addroutine} />
            <Route exact path="/addmove" component={Addmove} />
        </Switch>
    </BrowserRouter>
)

export { AppNavigator };
