import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Button} from '@material-ui/core';
import { Link } from 'react-router-dom'

import {
    Header as AppBar,
    List,
    AddFloatingIcon
} from '../../components';
import {
    load_moves,
    load_routines
} from '../../reducers/reducer';
import './styles.css';

// import AppBar from '../../components/Heading/AppBar.js';

class RoutineComponent extends Component {
    render() {
        console.log(this.props.moves)
        return (
            <div>
                <AppBar/>
                <br />
                <div className="page-content">
                    <h3>Your Routine: Total Body Workout</h3>
                    <Link to="/settime" className="setTimeLink">
                        <Button variant="contained" color="primary">
                            Start Workout!
                        </Button>
                    </Link>
                    <br /><br />
                    <List moves={this.props.moves}/>
                </div>
                <AddFloatingIcon name="Move" link="/Addmove"/>
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
    load_moves,
    load_routines
})(RoutineComponent);
