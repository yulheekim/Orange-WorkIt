import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { TextField } from '@material-ui/core';

import {
    AppBar,
    Button,
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

    uploadMove() {
        //TODO: checking for valid form
        //TODO: implement props (routine_id, routine_size)
        // TODO: fix onClick to trigger this
        console.log('Move uploading')
        this.props.send_move({
            routine_id: this.props.routine_id,
            order: this.props.routine_size,
            ...this.state
        });
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
                    <TextField id="2" label="Video URL" name="url" onChange={this.handleChange}/>
                    <br /><br />
                    <TextField id="3" label="Start Time" name="start" onChange={this.handleChange}/>
                    <br /><br />
                    <TextField id="4" label="End Time" name="end" onChange={this.handleChange}/>
                    <br /><br />
                    <TextField id="5" label="Duration" name="duration" onChange={this.handleChange}/>
                    <br /><br />
                    <Button name={"Add Move"} link={"/routine"} onClick={this.uploadMove}/>
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
