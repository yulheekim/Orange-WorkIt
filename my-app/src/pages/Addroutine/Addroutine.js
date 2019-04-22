import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { TextField, Button } from '@material-ui/core';

import {
    AppBar,
} from '../../components';
import './styles.css';

import {
    send_routine,
} from '../../reducers/reducer';


class AddroutineComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:'',
        };
    };

    handleChange = (event) => {
        const { target: { name, value } } = event;
        this.setState({ [name]: value });
    };

    uploadRoutine = () => {
        console.log('Rountine uploading')
        const routine = {
            user_id: this.props.user_id,
            name: this.state.name,
        };
        console.log(routine);
        this.props.send_routine(routine);
    }

    render() {
        const {name} = this.state;
        const buttonEnabled = name.length > 0;
        return (
            <div>
                <AppBar/>
                <br />
                <div class="page-content">
                    <h3>Add A Routine</h3>
                    {/* <input className="myinput"
                    placeholder="pls input"></input> */}
                    <TextField required id="1" label="Rountine Name" name="name" onChange={this.handleChange}/>
                    <br /><br />
                    <Button disabled={!buttonEnabled}
                        label="Add Routine" variant="contained" color="primary"
                            onClick={this.uploadRoutine}>
                        Add Routine
                    </Button>
                </div>
            </div>
        );
    }
}

export { AddroutineComponent };

const mapStateToProps = (state, ownProps) => {
    const { reducer } = state;
    const { user_id } = reducer;
    return {
        ...ownProps,
        user_id
    };
};

export const Addroutine = connect(mapStateToProps, {
    send_routine
})(AddroutineComponent);
