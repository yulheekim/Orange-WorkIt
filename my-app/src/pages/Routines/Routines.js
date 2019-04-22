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
    load_routines
} from '../../reducers/reducer';
import './styles.css';

// import AppBar from '../../components/Heading/AppBar.js';

class RoutinesComponent extends Component {
    componentDidMount() {
        this.props.load_routines(this.props.user_id);
    }

    render() {
        if (this.props.loading) {
            return <div>Loading... or the user might not have any routines yet :( In that case, please go to /addroutines</div>
        }

        console.log(this.props.routines);
        return (
            <div>
                {/* <AppBar/> */}
                <br />
                <div className="page-content">
                    <h3>Your Routines: </h3>
                    <br />
                    <ListRoutines routines={this.props.routines} />
                </div>
                {/* <AddFloatingIcon name="Routine"/> */}
            </div>
        );
    }
}

export { RoutinesComponent };

const mapStateToProps = (state, ownProps) => {
    const { reducer } = state;
    const { loading, loggedin, moves, routines, user_id } = reducer;
    return {
        ...ownProps,
        loading,
        loggedin,
        moves,
        routines,
        user_id
    };
};

export const Routines = connect(mapStateToProps, {
    load_moves,
    load_routines
})(RoutinesComponent);
