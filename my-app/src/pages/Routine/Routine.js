import React, { Component } from 'react';
import { connect } from 'react-redux';
import firebase from '../../firebaseTest.js';


import {
    AppBar,
    Paper,
    List
} from '../../components';
import './styles.css';

// import AppBar from '../../components/Heading/AppBar.js';

class RoutineComponent extends Component {
    constructor(props) {
    super(props);
    this.state = {
      routines: {},
      key: ''
    };
  }
    componentDidMount() {
        const ref = firebase.firestore().collection('routines').doc("1");
        ref.get().then((doc) => {
            if (doc.exists) {
                console.log(doc.data());
                this.setState({routines: doc.data(), key: doc.id, isLoading: false});
            } else {
                console.log("No such document!");
            }
        });
    }
    render() {
        return (
            <div>
                <AppBar/>
                <br />
                <h3>Your Routine: Favorite Ab Workout</h3>
                <List />
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
