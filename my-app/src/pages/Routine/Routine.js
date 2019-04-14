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
    constructor(props) {
    super(props);
    this.state = {
      routines: [],
      key: ''
    };
  }
    // componentDidMount() {
    //     let routines = [];
    //     const ref = firebase.firestore().collection('routines');
    //     ref.get().then((doc) => {
    //         doc.forEach(doc => {
    //             if (doc.exists) {
    //                 // console.log(doc.data());
    //                 let new_routine = doc.data();
    //                 new_routine.moves = [];
    //                 doc.ref.collection('moves').get().then((docs) => {
    //                     docs.forEach(doc => {
    //                         // console.log(doc.data());
    //                         new_routine.moves.push(doc.data());
    //                     });
    //                 });
    //                 routines.push(new_routine);
    //                 this.setState({routines: routines, key: doc.id, isLoading: false});
    //             } else {
    //                 console.log("No such document!");
    //             }
    //         })
    //     });
    //     setTimeout(() => { console.log(this.state.routines); }, 1000);
    // }
    render() {
        return (
            <div>
                <AppBar/>
                <br />
                <div class="page-content">
                    <h3>Your Routine: Favorite Ab Workout</h3>
                    <Button name={"Start Workout!"} link={"/move"}/>
                    <br />
                    <List />
                </div>
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
