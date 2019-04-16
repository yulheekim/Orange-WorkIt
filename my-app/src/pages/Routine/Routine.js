import React, { Component } from 'react';
import { connect } from 'react-redux';


import Grid from '@material-ui/core/Grid';

import {
    AppBar,
    Paper,
    List,
    Button
} from '../../components';
import {
    load_moves,
    load_routines
} from '../../reducers/reducer';
import './styles.css';

// import AppBar from '../../components/Heading/AppBar.js';

class RoutineComponent extends Component {
    componentDidMount() {
<<<<<<< HEAD
        this.props.load_routines(1);
        this.props.load_moves(1);
    }

    render() {
        if (this.props.loading) {
            return <div>Loading...</div>
        }
        console.log(this.props.routines);
=======
        // this.props.load_routines(1);
        // this.props.load_moves(this.props.routine_id);
    }

    render() {
        console.log(this.props.moves)
>>>>>>> b21883c974a2aa57ba27f2e82bc733334f2b8307
        return (
            <div>
                <AppBar/>
                <br />
                <div className="page-content">
                    <h3>Your Routine: Favorite Ab Workout</h3>
<<<<<<< HEAD
                    <Button/>
                    <br />
                    <List moves={this.props.moves} />
=======
                    <Button to='/settime'/>
                    <br />
                    <List moves={this.props.moves}/>
>>>>>>> b21883c974a2aa57ba27f2e82bc733334f2b8307
                </div>
            </div>
        );
    }
}

export { RoutineComponent };

const mapStateToProps = (state, ownProps) => {
    const { reducer } = state;
<<<<<<< HEAD
    const { loading, moves, routines } = reducer;
=======
    const { loading, moves, routines, routine_id } = reducer;
>>>>>>> b21883c974a2aa57ba27f2e82bc733334f2b8307
    return {
        ...ownProps,
        loading,
        moves,
<<<<<<< HEAD
        routines
=======
        routines,
        routine_id
>>>>>>> b21883c974a2aa57ba27f2e82bc733334f2b8307
    };
};

export const Routine = connect(mapStateToProps, {
<<<<<<< HEAD
    load_moves,
    load_routines
})(RoutineComponent);
=======

})(RoutineComponent);
>>>>>>> b21883c974a2aa57ba27f2e82bc733334f2b8307
