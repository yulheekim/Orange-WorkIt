import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { TextField, Button } from '@material-ui/core';

import {
    Header as AppBar,
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
            validURL:0,
        };
    };


    handleURL = (event) => {
        const { target: { name, value } } = event;
        const i = value.indexOf("https://youtu.be/");
        if(i != -1 && value.length === 28) {
            var parameter = 'https://www.youtube.com/embed/'+ value.substring(17);
            console.log(parameter);
            this.setState({ [name]: parameter });
            var element = document.getElementById("2");
            element.setAttribute("style","color:black;");
            this.state.validURL=1;
            console.log(this.state.validURL);
        }else{
            console.log("Wrong URL!");
            var element = document.getElementById("2");
            element.setAttribute("style","color:red;");
            this.state.validURL=0;
            console.log(this.state.validURL);
            this.setState({ [name]: value });
        }
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
            name: this.state.name,
            start_time: this.state.start_time,
            end_time: this.state.end_time,
            total_time:this.state.total_time,
            video_url: this.state.video_url,
        };
        console.log(move);
        this.props.send_move(move);
        setTimeout(() => this.props.load_moves(this.props.routine_id), 1000);
    }

    render() {
        const {name, start_time, end_time, total_time, video_url, validURL} = this.state;
        const buttonEnabled = name.length > 0 && start_time >= 0 && end_time > 0 && end_time>start_time && total_time > 0 && validURL > 0;
        return (
            <div>
                <AppBar/>
                <br />
                <div class="addmove-page-content">
                    <h3>Add a Move!</h3>
                    <div className="formtxt">Name: &nbsp;</div> 
                    <TextField required id="1" label="Routine Name" name="name" onChange={this.handleChange}/>
                    <br /><br />
                    <div className="formtxt">Video URL: &nbsp;</div>
                    <TextField required id="2" label="Youtube Video URL" name="video_url" onChange={this.handleURL}
                    defaultValue="https://youtu.be/"
                    helperText="Follow the URL instruction!"
                    />
                    <br /><br />
                    <div className="formtxt">Start Time:&nbsp; </div>
                    <TextField required type='number' id="3" label="Start Time" name="start_time" onChange={this.handleChange}/>
                    <br /><br />
                    <div className="formtxt">End Time: &nbsp;</div>
                    <TextField required type='number' id="4" label="End Time" name="end_time" onChange={this.handleChange}helperText="End Time > Start Time"/>
                    <br /><br />
                    <div className="formtxt">Duration: &nbsp;</div>
                    <TextField required type='number' id="5" label="Duration" name="total_time" onChange={this.handleChange}/>
                    <br /><br /><br />
                    <Link className="no_text_decoration" to="moves">
                    <Button id="add" disabled={!buttonEnabled}
                        label="Add Move" variant="contained" color="primary"
                    onClick={this.uploadMove} component={Link} to="moves">
                    Add Move
                    </Button>
                    <br /><br /><br />
                    <div>How to get a valid video URL?</div>
                    <br /><br />
                    <img className="img " src={require(`../../img/1.png`)} />
                    <br /><br />
                    <img className="img " src={require(`../../img/2.png`)} />
                    <br /><br />
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

