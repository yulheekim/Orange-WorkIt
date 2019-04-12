import React, { Component } from 'react';
import { connect } from 'react-redux';


import {
    AppBar,
    Paper,
    ListRoutines,
    Button
} from '../../components';
import {
    load_moves,
    load_routines
} from '../../reducers/reducer';
import './styles.css';

// import AppBar from '../../components/Heading/AppBar.js';

class RoutinesComponent extends Component {
    componentDidMount() {
        this.props.load_routines(1);
        // this.props.load_moves(1);
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
                    <h3>Your Routines: </h3>
                    <br />
                    <ListRoutines moves={this.props.routines} />
                </div>
            </div>
        );
    }
}

export { RoutinesComponent };

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

export const Routines = connect(mapStateToProps, {
    load_moves,
    load_routines
})(RoutinesComponent);
