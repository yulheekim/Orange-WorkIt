import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { TextField } from '@material-ui/core';

import {
    AppBar,
    Button,
} from '../../components';
import './styles.css';


class AddmoveComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            url: '',
            start: '',
            end: '',
            duration:'',
        };
    };

    handleChange = (event) => {
        const { target: { name, value } } = event;
        this.setState({ [name]: value });
    };

    uploadMove() {
        // upload current state to db as new move under this.props.routine
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
                    <Button name={"Add Move"} link={"/move"} onClick={this.uploadMove}/>
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

})(AddmoveComponent);
