import React from 'react';
import { BrowserRouter, Route, Switch} from "react-router-dom";
import {
    Routine,
<<<<<<< HEAD
    Routines,
    Login,
    Move
=======
    Move,
    Login,
    Addroutine,
    Addmove
>>>>>>> master
} from '../pages';

const AppNavigator = () => (
    <BrowserRouter>
        <Switch>
<<<<<<< HEAD
            <Route exact path="/" component={Login} />
            <Route exact path="/routines" component={Routines} />
            <Route exact path="/moves" component={Routine} />
            <Route exact path="/timer" component={Move} />
=======
            <Route exact path="/" component={Routine} />
            <Route exact path="/move" component={Move} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/routine" component={Routine} />
            <Route exact path="/addroutine" component={Addroutine} />
            <Route exact path="/addmove" component={Addmove} />
>>>>>>> master
        </Switch>
    </BrowserRouter>
)

export { AppNavigator };
