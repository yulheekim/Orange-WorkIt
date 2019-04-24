import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { TextField, Button } from '@material-ui/core';

import {
    AppBar,
} from '../../components';
import {
    send_move,
    load_moves,
} from '../../reducers/reducer';
import './styles.css';


class AddmoveComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            start_time: '',
            end_time: '',
            total_time:'',
            video_url: '',
        };
    };

    handleChange = (event) => {
        const { target: { name, value } } = event;
        this.setState({ [name]: value });
    };

    uploadMove = () => {
        //TODO: checking for valid form
        //TODO: implement props (routine_id, routine_size)
        //console.log('Move uploading')
        const move = {
            routine_id: this.props.routine_id,
            order: this.props.moves.length,
            ...this.state
        };
        this.props.send_move(move);
        setTimeout(() => this.props.load_moves(this.props.routine_id), 1000);
    }

    render() {
        const {name, start_time, end_time, total_time, video_url} = this.state;
        const buttonEnabled = name.length > 0 && start_time > 0 && end_time > 0 && total_time > 0 && video_url.length > 0;
        return (
            <div>
                <AppBar/>
                <br />
                <div class="page-content">
                    <h3>Add a Move!</h3>
                    <TextField required id="1" label="Name" name="name" onChange={this.handleChange}/>
                    <br /><br />
                    <TextField required id="2" label="Video URL" name="video_url" onChange={this.handleChange}/>
                    <br /><br />
                    <TextField required type='number' id="3" label="Start Time" name="start_time" onChange={this.handleChange}/>
                    <br /><br />
                    <TextField required type='number' id="4" label="End Time" name="end_time" onChange={this.handleChange}/>
                    <br /><br />
                    <TextField required type='number' id="5" label="Duration" name="total_time" onChange={this.handleChange}/>
                    <br /><br />
                    <Link className="no_text_decoration" to="moves">
                    <Button
                        disabled={!buttonEnabled}
                        label="Add Move" variant="contained" color="primary"
                            onClick={this.uploadMove}>
                        Add Move
                    </Button>
                    </Link>
                </div>
            </div>
        );
    }
}

export { AddmoveComponent };

const mapStateToProps = (state, ownProps) => {
    const { reducer } = state;
    const { routine_id, moves } = reducer;
    return {
        ...ownProps,
        routine_id,
        moves,
    };
};

export const Addmove = connect(mapStateToProps, {
    send_move,
    load_moves,
})(AddmoveComponent);
