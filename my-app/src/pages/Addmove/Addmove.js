import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
// import TextField from '@material-ui/core/TextField';

import {
    TextField,
    AppBar,
    Button
} from '../../components';
import './styles.css';


class AddmoveComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:'1',
            routines: [],
            key: ''
        };
    };

    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    };

    render() {
        return (
            <div>
                <AppBar/>
                <br />
                <div class="page-content">
                    <h3>Add Routine</h3>
                    {/* <input className="myinput"
                    placeholder="pls input"></input> */}
                    <TextField required id="name" label="Rountine Name" onChange={this.handleChange('name')}/>
                    <br />
                    <TextField required id="name2" label="Rountine Name"/>
                    <br />
                    <TextField id="name3" label="..." />
                    <br />
                    <TextField id="name4" label="..." />
                    <br />
                    <TextField id="name5" label="..."/>
                    <br /><br />
                    <div>{this.state.name}</div>
                    <Button name={"Add"} component={Link} to={{pathname:'/login', search: '?sort=name',  hash: '#the-hash', state:'name'}}/>
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
