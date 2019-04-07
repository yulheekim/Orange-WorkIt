import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
    AppBar,
} from '../../components';
import './styles.css';

// import AppBar from '../../components/Heading/AppBar.js';

class RoutineComponent extends Component {
    render() {
        return (
            <div>
                <AppBar/>
                <h1> list of routines here </h1>
            </div>
        );
    }
}

export { RoutineComponent };

const mapStateToProps = (state, ownProps) => {
    return {
        ...ownProps
    };
};

export const Routine = connect(mapStateToProps, {

})(RoutineComponent);
