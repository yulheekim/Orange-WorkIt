import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { Button, TextField } from '@material-ui/core';

import {
    AppBar,
    Paper,
    List,
} from '../../components';
import {
    change_username,
    handle_login,
    handle_register,
    load_routines
} from '../../reducers/reducer';

class LoginComponent extends Component {
    componentDidMount() {
    }

    handleUsernameChange = (event) => {
        this.props.change_username(event.target.value);
    };

    handleLogin = () => {
        this.props.handle_login(this.props.username);
    }
    handleRegister = () => {
        this.props.handle_register(this.props.username);
    }
    render() {
        if(this.props.loggedin) {
            this.props.load_routines(this.props.user_id);
            return (
                <Redirect to="routines" />
            )
        }
        return (
            <div>
                <AppBar/>
                <br/>
                <div className="page-content">
                    <TextField
                        id="outlined-name"
                        label="Name"
                        className="usernameTextField"
                        value={this.props.username}
                        onChange={this.handleUsernameChange}
                        margin="normal"
                        variant="outlined"
                    />
                </div>
                <br/>
                <div className={"page-content"}>
                    <Button variant="contained" color="primary" onClick={()=>this.handleLogin()} className="loginButton">
                        Login
                    </Button>
                    <Button variant="contained" color="secondary" onClick={()=>this.handleRegister()} className="registerButton">
                        Register
                    </Button>
                </div>
            </div>
        );
    }
}

export { LoginComponent };

const mapStateToProps = (state, ownProps) => {
    const { reducer } = state;
    const { loading, loggedin, routines, username, user_id } = reducer;
    return {
        ...ownProps,
        loading,
        loggedin,
        routines,
        username,
        user_id
    };
};

export const Login = connect(mapStateToProps, {
    change_username,
    handle_login,
    handle_register,
    load_routines
})(LoginComponent);
