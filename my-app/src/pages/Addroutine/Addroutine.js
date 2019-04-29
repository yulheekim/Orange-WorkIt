import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { TextField, Button } from '@material-ui/core';

import {
    Header as AppBar
} from '../../components';
import './styles.css';

import {
    send_routine,
    load_routines,
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

    // uploadRoutine = () => {
    //     console.log('Rountine uploading')
    //     const routine = {
    //         user_id: this.props.user_id,
    //         name: this.state.name,
    //     };
    //     console.log(routine);
    //     this.props.send_routine(routine);
    // }

    uploadRoutine = () => {
        //console.log('Rountine uploading')
        const routine = {
            user_id: this.props.user_id,
            name: this.state.name,
        };
        //console.log(routine);
        this.props.send_routine(routine);

        //this.props.load_routines(this.props.user_id);
        console.log('wow');
        console.log(this.props.routine_id);
        setTimeout(() => this.props.load_routines(this.props.user_id), 1000);
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
                    {/* <Link className="no_text_decoration" to="routines"> */}
                    <Button
                        disabled={!buttonEnabled}
                            label="Add Routine" variant="contained" color="primary"
                            onClick={this.uploadRoutine} component={Link} to="routines">
                        Add Routine
                    </Button>
                    {/* </Link> */}
                </div>
            </div>
        );
    }
}

export { AddroutineComponent };

const mapStateToProps = (state, ownProps) => {
    const { reducer } = state;
    const { user_id, routine_sent, routine_id } = reducer;
    return {
        ...ownProps,
        user_id,
        routine_sent,
        routine_id,
    };
};

export const Addroutine = connect(mapStateToProps, {
    send_routine,
    load_routines
})(AddroutineComponent);
