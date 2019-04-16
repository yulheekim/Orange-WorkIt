import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { TextField, Button } from '@material-ui/core';

import {
    AppBar,
} from '../../components';
import {
    send_move,
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
        console.log('Move uploading')
        const move = {
            routine_id: 1,
            order: 3,
            ...this.state
        };
        console.log(move);
        this.props.send_move(move);
    }

    render() {
        return (
            <div>
                <AppBar/>
                <br />
                <div class="page-content">
                    <h3>Add a Move!</h3>
                    <TextField id="1" label="Name" name="name" onChange={this.handleChange}/>
                    <br /><br />
                    <TextField id="2" label="Video URL" name="video_url" onChange={this.handleChange}/>
                    <br /><br />
                    <TextField id="3" label="Start Time" name="start_time" onChange={this.handleChange}/>
                    <br /><br />
                    <TextField id="4" label="End Time" name="end_time" onChange={this.handleChange}/>
                    <br /><br />
                    <TextField id="5" label="Duration" name="total_time" onChange={this.handleChange}/>
                    <br /><br />
                    <Button label="Add Move" variant="contained" color="primary"
                    onClick={this.uploadMove}/>
                </div>
            </div>
        );
    }
}

export { AddmoveComponent };

const mapStateToProps = (state, ownProps) => {
    return {
        ...ownProps
    };
};

export const Addmove = connect(mapStateToProps, {
    send_move
})(AddmoveComponent);
