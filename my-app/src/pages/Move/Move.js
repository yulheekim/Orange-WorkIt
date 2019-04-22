import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Timer from 'react-compound-timer';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';

import {
    AppBar
} from '../../components';
import './styles.css';

import {
    load_moves,
    load_routines, 
    increment_move_index,
    toggle_move_or_break,
    toggle_finish_routine,
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

class MoveComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            move_time: this.props.location.state.move_time,
            break_time: this.props.location.state.break_time,
            timerKey: 0,
        };

    };

    flipToNext(move_index) {
        if (this.props.move_index >= this.props.moves.length - 1) {
            this.props.toggle_finish_routine(this.props.routine_is_finished);
            return;
        }
        if (this.props.move_or_break) {
            this.props.increment_move_index(move_index);
        }
        this.props.toggle_move_or_break(this.props.move_or_break);
        setTimeout(() => console.log(this.props.move_index), 2000);

        console.log(this.state.move_time)
        this.setState((state) => {
            return {
                timerKey: Math.random(),
                move_time: this.props.location.state.move_time,
                break_time: this.props.location.state.break_time,
            }
        })
        console.log(this.state.move_time)
    }

    handleNext(move_index) {
        setTimeout(() => this.flipToNext(move_index), 1000); // add this timeout because timer kept resetting at 00:01 instead of 00:00
    }

    handleClickRoutines() {
        this.props.toggle_finish_routine(this.props.routine_is_finished);
    }



    render() {
        console.log("rendering move component!")
        console.log(this.props.move_index)
        if (this.props.move_or_break === true) {
            return (
                <div>
                    <AppBar />
                    <br />
                    <br />
                    <div class="page-content">
                    <div class="resp-container">
                    <iframe class="resp-iframe" width="560" height="315" src="https://www.youtube.com/embed/aCa8R9II8F0?version=3&controls=0&start=54&end=83&autoplay=1"
                        frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                        <br />
                        <h2>{this.props.moves[this.props.move_index].name}</h2>
                        <Card>
                            <div class="timer">
                            <Timer
                                    key={this.state.timerKey}
                                    initialTime={this.state.move_time} // hardcode. replace.
                                    direction="backward"
                                    onReset={() => {
                                    }}
                                    checkpoints={[
                                        {time: 0,
                                        callback: () => this.handleNext(this.props.move_index) } // callback function for when timer reaches 0
                                    ]}
                                >
                                    {( { pause, resume } ) => ( // the formatValue attribute formats the seconds such that the leading 0 is displayed on single digits
                                        <React.Fragment>
                                        <div>
                                            <Timer.Minutes formatValue={(value) => `${(value < 10 ? `0${value}` : value)}:`}/>
                                            <Timer.Seconds formatValue={(value) => `${(value < 10 ? `0${value}` : value)}`}/>
                                        </div>
                                        <div>
                                            <Button variant="contained" color="primary" onClick={pause}>Pause</Button>  <Button variant="contained" color="primary" onClick={resume}>Resume</Button>
                                        </div>
                                        </React.Fragment>
                                    )}
                                </Timer>
                            </div>
                        </Card>
                    </div>
                </div>
        
                );
        }
        else if (!this.props.routine_is_finished) {
            return(
                    <section class="hero-image">
                        <h1>break time!</h1>
                        <div className="break-timer">
                            <Timer
                                key={this.state.timerKey}
                                initialTime={this.state.break_time} // hardcode. replace.
                                direction="backward"
                                onReset={() => {
                                }}
                                checkpoints={[
                                    {time: 0,
                                    callback: () => this.handleNext(this.props.move_index) } // callback function for when timer reaches 0
                                ]}
                            >
                                {( { pause, resume } ) => ( // the formatValue attribute formats the seconds such that the leading 0 is displayed on single digits
                                    <React.Fragment>
                                    <div>
                                        <Timer.Minutes formatValue={(value) => `${(value < 10 ? `0${value}` : value)}:`}/>
                                        <Timer.Seconds formatValue={(value) => `${(value < 10 ? `0${value}` : value)}`}/>
                                    </div>
                                    <div>
                                        <Button variant="contained" color="primary" onClick={pause}>Pause</Button>  <Button variant="contained" color="primary" onClick={resume}>Resume</Button>
                                    </div>
                                    </React.Fragment>
                                )}
                            </Timer>
                        </div>
                    </section>
            );
        }
        else {
            return(
                <section class="hero-image">
                    <h1>Congrats! You Made It!</h1>
                    <div className="back-to-menu-button">
                        <Link to="routines" className="back_link">
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={() => this.handleClickRoutines()}
                            >
                                Back To Your Routines
                            </Button>
                        </Link>
                    </div>
                </section>
            );
        }
    }
}
export { MoveComponent };

const mapStateToProps = (state, ownProps) => {
    const { reducer } = state;
    const { loading, moves, move_index, move_or_break, routine_is_finished, user_id } = reducer;
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

export const Move = connect(mapStateToProps, {
    load_moves,
    load_routines,
    increment_move_index,
    toggle_move_or_break,
    toggle_finish_routine,
})(MoveComponent);

//====================
// updating move_index using component state
//====================
// class MoveComponent extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             index: 0
//         };

//     };

//     handleNext() {
//         console.log("made it to handle next!")
//         this.setState((state) => {
//             return {index: state.index + 1}
//         })
//         console.log(this.state.index)

//     };

//     render() {
//         return ( // hardcode <h2>. replace.
//         <div>
//             <AppBar />
//             <br />
//             <br />
//             <div class="page-content">
//             <div class="resp-container">
//             <iframe class="resp-iframe" width="560" height="315" src="https://www.youtube.com/embed/ynUw0YsrmSg?version=3&controls=0&start=54&end=83&autoplay=1"
//                 frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
//             </div>
//                 <br />
//                 <h2>{this.props.moves[this.state.index].name}</h2>
//                 <Card>
//                     <div class="timer">
//                     <Timer
//                             initialTime={1000} // hardcode. replace.
//                             direction="backward"
//                             checkpoints={[
//                                 {time: 0,
//                                 callback: () => this.handleNext() } // callback function for when timer reaches 0
//                             ]}
//                         >
//                             {( { pause, resume } ) => ( // the formatValue attribute formats the seconds such that the leading 0 is displayed on single digits
//                                 <React.Fragment>
//                                 <div>
//                                     <Timer.Minutes formatValue={(value) => `${(value < 10 ? `0${value}` : value)}:`}/>
//                                     <Timer.Seconds formatValue={(value) => `${(value < 10 ? `0${value}` : value)}`}/>
//                                 </div>
//                                 <div>
//                                     <Button variant="contained" color="primary" onClick={pause}>Pause</Button>  <Button variant="contained" color="primary" onClick={resume}>Resume</Button>
//                                 </div>
//                                 </React.Fragment>
//                             )}
//                         </Timer>
//                     </div>
//                 </Card>
//             </div>
//         </div>
//         );
//     }
// }

// MoveComponent.propTypes = {
//     classes: PropTypes.object.isRequired,
//   };
