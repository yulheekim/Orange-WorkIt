import React, { Component } from 'react';
import { connect } from 'react-redux';
// import firebase from '../../firebaseTest.js';


import Grid from '@material-ui/core/Grid';

import {
    AppBar,
    Paper,
    List,
    Button
} from '../../components';
import './styles.css';

// import AppBar from '../../components/Heading/AppBar.js';

class RoutineComponent extends Component {
    componentDidMount() {
        // this.props.load_routines(1);
        // this.props.load_moves(this.props.routine_id);
    }

    render() {
        console.log(this.props.moves)
        return (
            <div>
                <AppBar/>
                <br />
                <div class="page-content">
                    <h3>Your Routine: Favorite Ab Workout</h3>
                    <Button to='/settime'/>
                    <br />
                    <List moves={this.props.moves}/>
                </div>
            </div>
        );
    }
}

export { RoutineComponent };

const mapStateToProps = (state, ownProps) => {
    const { reducer } = state;
    const { loading, moves, routines, routine_id } = reducer;
    return {
        ...ownProps,
        loading,
        moves,
        routines,
        routine_id
    };
};

export const Routine = connect(mapStateToProps, {

})(RoutineComponent);
