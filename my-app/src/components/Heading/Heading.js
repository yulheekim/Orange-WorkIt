import React, { Component } from 'react';
import { connect } from 'react-redux';

// import {
//
// } from '../../components';
import './styles.css';

class HeadingComponent extends Component {
    render() {
        return (
            <div>
                <h1> WorkIt </h1>
            </div>
        );
    }
}

export { HeadingComponent };

const mapStateToProps = (state, ownProps) => {
    return {
        ...ownProps
    };
};

export const Heading = connect(mapStateToProps, {

})(HeadingComponent);
