import React, { Component } from 'react';
import { connect } from 'react-redux';


import Grid from '@material-ui/core/Grid';

import {
    AppBar,
    TextField,
    Button
} from '../../components';
import {
    load_moves,
    load_routines
} from '../../reducers/reducer';
import './styles.css';

// import AppBar from '../../components/Heading/AppBar.js';

class SetTimeComponent extends Component {
    componentDidMount() {

    }

    render() {
        return (
            <div>
                <AppBar/>
                <br />
                <div className="page-content">
                    <h3>Set Time</h3>
                    <span>Move Time</span><TextField/>
                    <span>Break Time</span><TextField/>
                    <Button/>
                    <br />
                </div>
            </div>
        );
    }
}

export { SetTimeComponent };

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

export const SetTime = connect(mapStateToProps, {
    load_moves,
    load_routines
})(SetTimeComponent);
