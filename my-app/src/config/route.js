import React from 'react';
import { BrowserRouter, Route, Switch} from "react-router-dom";
import {
    Routine,
    Routines,
    Login,
    Move,
    Addroutine,
    Addmove,
    SetTime
} from '../pages';

import {
    Header
} from '../components'

const AppNavigator = () => (
    <div>
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/routines" component={Routines} />
            <Route exact path="/moves" component={Routine} />
            <Route exact path="/do-moves" component={Move} />
            <Route exact path="/timer" component={Move} />
            <Route exact path="/settime" component={SetTime} />
            <Route exact path="/addroutine" component={Addroutine} />
            <Route exact path="/addmove" component={Addmove} />
        </Switch>
    </BrowserRouter>
    </div>
)

export { AppNavigator };
