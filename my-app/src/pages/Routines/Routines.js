import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import {
    Header as AppBar,
    ListRoutines,
    AddFloatingIcon
} from '../../components';
import {
    load_moves,
    load_routines,
    set_go_home
} from '../../reducers/reducer';
import './styles.css';

class RoutinesComponent extends Component {
    componentDidMount() {
        this.props.load_routines(this.props.user_id);
        // this.props.set_go_home(false);
    }

    render() {
        if (this.props.loading || this.props.go_home) {
            this.props.set_go_home(false);
            return <div className="loading">Loading... </div>
        }

        console.log(this.props.routines);
        return (
            <div>
                <AppBar/>
                <br />
                <div className="page-content">
                    <h3>Your Routines: </h3>
                    <br />
                    <ListRoutines routines={this.props.routines} />
                </div>
                <AddFloatingIcon name="Routine" link="/Addroutine"/>
            </div>
        );
    }
}

export { RoutinesComponent };

const mapStateToProps = (state, ownProps) => {
    const { reducer } = state;
    const { loading, loggedin, moves, routines, user_id, go_home } = reducer;
    return {
        ...ownProps,
        loading,
        loggedin,
        moves,
        routines,
        user_id,
        go_home
    };
};

export const Routines = connect(mapStateToProps, {
    load_moves,
    load_routines,
    set_go_home
})(RoutinesComponent);
