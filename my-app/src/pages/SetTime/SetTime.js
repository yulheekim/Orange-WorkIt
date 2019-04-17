import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'

import Grid from '@material-ui/core/Grid';

import {
    AppBar,
    TextField,
} from '../../components';
import {
    load_moves,
    load_routines
} from '../../reducers/reducer';
import './styles.css';
import SetTimeButton from "../../components/Button/Button";

class SetTimeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            move_time: 45000,
            break_time: 20000,
        };

    };

    render() {
        return (
            <div>
                <AppBar/>
                <br />
                <div className="page-content">
                    <h3>Set Time</h3>
                    <h4>For how many seconds would you like to do each move?</h4>
                    <TextField
                        required
                        id="moveTime"
                        label="Move Time"
                        type="number"
                        placeholder="45"
                        onChange={e => this.setState({ move_time: e.target.value })}
                    />
                    <h4>For how many seconds would you like to rest between each move?</h4>
                    <TextField
                        required
                        id="moveTime"
                        label="Break Time"
                        type="number"
                        placeholder="15"
                        onChange={e => this.setState({ break_time: e.target.value })}
                    />
                    <br />
                    <br />
                    <br />
                    <Button to={{pathname: "/timer", state: {move_time: this.state.move_time * 1000, break_time:this.state.break_time * 1000}}}
                            component={Link}
                            variant="contained"
                            color="primary">
                    Start Workout!
                    </Button>
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
