import React, { Component } from 'react';
import { connect } from 'react-redux';


import Grid from '@material-ui/core/Grid';

import {
    AppBar,
    List,
    Button,
    AddFloatingIcon
} from '../../components';
import {
    load_moves,
    load_routines
} from '../../reducers/reducer';
import './styles.css';

import Speech from 'speak-tts';
const speech = new Speech;

if(speech.hasBrowserSupport()) { // returns a boolean
    console.log("speech synthesis supported")
}

speech.init({
    'volume': 1,
    'lang': 'en-GB',
    'rate': 1,
    'pitch': 1,
    'voice':'Google UK English Male',
    'splitSentences': true,
    'listeners': {
        'onvoiceschanged': (voices) => {
            console.log("Event voiceschanged", voices)
        }
    }
});


function say_something(speech) {
    speech.speak({
        text: "Get ready to sweat.",
    }).then(() => {
        console.log("Success !")
    }).catch(e => {
        console.error("An error occurred :", e)
    })
}

say_something(speech);

// import AppBar from '../../components/Heading/AppBar.js';

class RoutineComponent extends Component {
    render() {
        console.log(this.props.moves)
        return (
            <div>
                <AppBar/>
                <br />
                <div className="page-content">
                    <h3>Your Routine: Total Body Workout</h3>
                    <Button name={"Start Workout!"} link={"/settime"} onmouseover = { () => say_something(speech) } />
                    <br />
                    <List moves={this.props.moves}/>
                </div>
                <AddFloatingIcon name="Move" link="/Addmove"/>
            </div>
        );
    }
}

export { RoutineComponent };

const mapStateToProps = (state, ownProps) => {
    const { reducer } = state;
    const { loading, moves, routines, routine_id } = reducer;
    return {
        ...ownProps,
        loading,
        moves,
        routines,
        routine_id
    };
};

export const Routine = connect(mapStateToProps, {
    load_moves,
    load_routines
})(RoutineComponent);
