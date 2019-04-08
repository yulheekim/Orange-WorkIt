import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
    AppBar
} from '../../components';
import './styles.css';

class MoveComponent extends Component {
    render() {
        return (
            <div>
                <AppBar />
                <h1> details about a move inside a routine </h1>
                <h2> Leg Workout </h2>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/aCa8R9II8F0?controls=0&start=54&end=83" 
                frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        );
    }
}

export { MoveComponent };

const mapStateToProps = (state, ownProps) => {
    return {
        ...ownProps
    };
};

export const Move = connect(mapStateToProps, {

})(MoveComponent);
