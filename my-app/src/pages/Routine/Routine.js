import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
    Heading
} from '../../components';
import './styles.css';

class RoutineComponent extends Component {
    render() {
        return (
            <div>
                <Heading />
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
