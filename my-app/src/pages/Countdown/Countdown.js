import React, {Component} from 'react';
import {connect} from 'react-redux';
import Timer from 'react-compound-timer';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {Link, Redirect} from 'react-router-dom';


import {
    Header as AppBar,
    NavigationFloatingIcon
} from '../../components';
import './styles.css';

import {
    load_moves,
    load_routines,
    increment_move_index,
    toggle_move_or_break,
    decrement_move_index,
    toggle_finish_routine,
    zero_move_index
} from '../../reducers/reducer';

const styles = theme => ({
    card: {
        width: '100%',
        justify: "center",
        font: '100px',
    },
});

//====================
// updating move_index using redux
//====================

class CountdownComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            move_time: this.props.location.state.move_time,
            break_time: this.props.location.state.break_time,
            countStartTime: 10,
            timerKey: 0,
            pauseTag: false,
            resumeTag: true,
            pauseMoveTag: false,
            resumeMoveTag: true,
            go_back: false,
        };

    };

    handleNext(move_index) {
        setTimeout(() => this.flipToNext(move_index), 1000); // add this timeout because timer kept resetting at 00:01 instead of 00:00
    }

    render() {
      // if (this.state.go_back) {
      //     this.props.zero_move_index();
      //     return (
      //         <Redirect to="moves"/>
      //     )
      // }
      if (this.state.doneTag)  {
          return (
              <Redirect to={{pathname: "/moves", state: {move_time: this.state.move_time, break_time:this.state.break_time}}} />
          )
      }
      if (true) {
          return (
              <div>
                  <AppBar/>
                  <br/>
                  <br/>
                  <div class="page-content">
                      <h2>Get Ready for Your Workout to Begin!</h2>
                      <Card>
                          <div class="timer">
                              <Timer
                                  key={this.state.timerKey}
                                  initialTime={10}
                                  direction="backward"
                                  onReset={() => {
                                  }}
                                  onPause = { ()=> {
                                      console.log(' onPause hook ')
                                      this.setState({ pauseMoveTag: !this.state.pauseMoveTag });
                                      this.setState({ resumeMoveTag: !this.state.resumeMoveTag });
                                  }}
                                  onResume = { ()=> {
                                      console.log(' onResume hook ')
                                      this.setState({ pauseMoveTag: !this.state.pauseMoveTag });
                                      this.setState({ resumeMoveTag: !this.state.resumeMoveTag });
                                  }}
                                  checkpoints={[
                                      {
                                          time: 0,
                                          callback: () => this.handleNext(this.props.move_index)
                                      } // callback function for when timer reaches 0
                                  ]}
                              >
                                  {({pause, resume}) => ( // the formatValue attribute formats the seconds such that the leading 0 is displayed on single digits
                                      <React.Fragment>
                                          <div>
                                              <Timer.Minutes formatValue={(value) => `${(value < 10 ? `0${value}` : value)}:`}/>
                                              <Timer.Seconds formatValue={(value) => `${(value < 10 ? `0${value}` : value)}`}/>
                                          </div>
                                          <div>
                                              <Button variant="contained" color="primary" onClick={pause} disabled={this.state.pauseMoveTag}>Pause</Button>
                                              <Button variant="contained" color="primary" onClick={resume} disabled={this.state.resumeMoveTag}>Resume</Button>
                                          </div>
                                      </React.Fragment>
                                  )}
                              </Timer>
                          </div>
                          <Button onClick={this.handleBack}
                                  variant="outlined"
                                  color="secondary">
                              End Workout
                          </Button>
                          <br/>
                          <br/>
                      </Card>
                  </div>
              </div>

              );
        }
    }
}

export {CountdownComponent};

const mapStateToProps = (state, ownProps) => {
    const {reducer} = state;
    const {loading, moves, move_index, move_or_break, routine_is_finished, user_id} = reducer;
    return {
        ...ownProps,
        loading,
        moves,
        move_index,
        move_or_break,
        routine_is_finished,
        user_id,
    };
};

export const Countdown = connect(mapStateToProps, {
})(CountdownComponent);
