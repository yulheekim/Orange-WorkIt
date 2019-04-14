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
        this.props.load_routines(1);
        this.props.load_moves(1);
    }

    render() {
        if (this.props.loading) {
            return <div>Loading...</div>
        }
        console.log(this.props.routines);
        return (
            <div>
                <AppBar/>
                <br />
                <div className="page-content">
                    <h3>Your Routine: Favorite Ab Workout</h3>
                    <Button to='/move'/>
                    <br />
                    <List moves={this.props.moves} />
                </div>
            </div>
        );
    }
}

export { RoutineComponent };

const mapStateToProps = (state, ownProps) => {
    const { reducer } = state;
    const { loading, moves, routines } = reducer;
    return {
        ...ownProps,
        loading,
        moves,
        routines
    };
};

export const Routine = connect(mapStateToProps, {
    load_moves,
    load_routines
})(RoutineComponent);
