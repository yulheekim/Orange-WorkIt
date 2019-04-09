import React, { Component } from 'react';
import { connect } from 'react-redux';
import firebase from '../../firebaseTest.js';


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
    super();
    this.state = {
      routines: [{name: "abs",
                    moves: [{
                        end_time: "131",
                        start_time: "91",
                        name: "spiderman plank",
                        total_time: "45",
                        video_url: "https://youtu.be/UBnfm4s7CRA?list=PL48bwuiYkDmf3UAZjxBWCKvVGGIUi2xuj"
                    },
                    {
                        end_time: "91",
                        start_time: "51",
                        name: "plank squat",
                        total_time: "45",
                        video_url: "https://youtu.be/Th97oQ4eF9U?list=PL48bwuiYkDmf3UAZjxBWCKvVGGIUi2xuj"
                    },
                    {
                        end_time: "1",
                        start_time: "41",
                        name: "crunches",
                        total_time: "45",
                        video_url: "https://youtu.be/Th97oQ4eF9U?list=PL48bwuiYkDmf3UAZjxBWCKvVGGIUi2xuj"
                    }]},
                ],
      key: ''
    };
  }
    componentDidMount() {
        let routines = [];
        const ref = firebase.firestore().collection('routines');
        ref.get()
        .then((doc) => {
            doc.forEach(doc => {
                if (doc.exists) {
                    // console.log(doc.data());
                    let new_routine = doc.data();
                    new_routine.moves = [];
                    doc.ref.collection('moves').get().then((docs) => {
                        docs.forEach(doc => {
                            // console.log(doc.data());
                            new_routine.moves.push(doc.data());
                        });
                    });
                    routines.push(new_routine);
                    // this.setState({routines: routines, key: doc.id, isLoading: false});
                } else {
                    console.log("No such document!");
                }
            })
        });
        // setTimeout(() => { console.log(this.state.routines); }, 500);
    }
    render() {
        setTimeout(() => { console.log(this.state.routines); }, 500);
        return (
            <div>
                <AppBar/>
                <br />
                <div class="page-content">
                    <h3>Your Routine: Favorite Ab Workout</h3>
                    <Button/>
                    <br />
                    <List routines={this.state.routines} />
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
