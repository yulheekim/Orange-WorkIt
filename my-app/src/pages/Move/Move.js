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

class MoveComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            move_time: this.props.location.state.move_time,
            break_time: this.props.location.state.break_time,
            timerKey: 0,
            pauseTag: false,
            resumeTag: true,
            pauseMoveTag: false,
            resumeMoveTag: true,
            go_back: false,
        };

    };

    flipToNext(move_index) {
        if (this.props.move_index >= this.props.moves.length - 1 && !this.props.move_or_break) {
            this.props.toggle_finish_routine(this.props.routine_is_finished);
            return;
        }
        this.props.toggle_move_or_break(this.props.move_or_break);
        if (this.props.move_or_break) {
            this.props.increment_move_index(move_index);
        }

        //setTimeout(() => console.log(this.props.move_index), 2000);

        //console.log(this.state.move_time)
        this.setState((state) => {
            return {
                timerKey: Math.random(),
                move_time: this.props.location.state.move_time,
                break_time: this.props.location.state.break_time,
            }
        })
        //console.log(this.state.move_time)
    }

    handleNext(move_index) {
        setTimeout(() => this.flipToNext(move_index), 1000); // add this timeout because timer kept resetting at 00:01 instead of 00:00
    }

    handleClickRoutines() {
        this.props.toggle_finish_routine(this.props.routine_is_finished);
    }

    // this is the function that gets called when you click on the right arrow button when the workout has started
    handleToNextFromMove(move_index) {
        if (this.props.move_index >= this.props.moves.length - 1) {
            return;
        }
        this.props.increment_move_index(move_index);
        this.setState((state) => {
            return {
                timerKey: Math.random(),
                move_time: this.props.location.state.move_time,
                break_time: this.props.location.state.break_time,
            }
        })
    }

    // this is the function that gets called when you click on the left arrow button when the workout has started
    handleToPrevFromMove(move_index) {
        if (this.props.move_index <= 0) {
            return;
        }
        this.props.decrement_move_index(move_index);
        this.setState((state) => {
            return {
                timerKey: Math.random(),
                move_time: this.props.location.state.move_time,
                break_time: this.props.location.state.break_time,
            }
        })
    }

    handleToNextFromBreak(move_index) {
        if (this.props.move_index >= this.props.moves.length - 1) {
            return;
        }
        this.props.increment_move_index(move_index);
        this.props.toggle_move_or_break(this.props.move_or_break);
        this.setState((state) => {
            return {
                timerKey: Math.random(),
                move_time: this.props.location.state.move_time,
                break_time: this.props.location.state.break_time,
            }
        })
    }

    // this is the function that gets called when you click on the left arrow button when the workout has started
    handleToPrevFromBreak(move_index) {
        if (this.props.move_index < 0) {
            return;
        }
        this.props.decrement_move_index(move_index);
        this.props.toggle_move_or_break(this.props.move_or_break);
        this.setState((state) => {
            return {
                timerKey: Math.random(),
                move_time: this.props.location.state.move_time,
                break_time: this.props.location.state.break_time,
            }
        })
    }

    handleBack = () => {
        this.setState({go_back: true});
    }

    render() {
        // console.log("rendering move component!")
        // console.log(this.props.move_index)
        if (this.props.routine_is_finished) {
            return (
                <section class="hero-image">
                    <h1>Congrats! You Made It!</h1>
                    <div className="back-to-menu-button">
                        <Link to="routines" className="back-link">
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
        if (this.props.move_or_break === true) {
            console.log("rendering move component!")
            console.log(this.props.move_index)

            if (this.state.go_back) {
                this.props.zero_move_index();
                return (
                    <Redirect to="moves"/>
                )
            }
        }

        if (this.props.move_or_break === true) { // true means you're on a workout page
            return (
                <div>
                    <AppBar/>
                    <br/>
                    <br/>
                    <div class="page-content">
                        <div class="resp-container">
                            <iframe class="resp-iframe" width="560" height="315"
                                    src={this.props.moves[this.props.move_index].video_url + "&start=" + this.props.moves[this.props.move_index].start_time + "&end=" + this.props.moves[this.props.move_index].end_time + "&autoplay=1"}
                                    frameborder="0"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen></iframe>
                        </div>
                        <br/>
                        <h2>{this.props.moves[this.props.move_index].name}</h2>
                        <Card>
                            <div class="timer">
                                <Timer
                                    key={this.state.timerKey}
                                    initialTime={this.state.move_time} // hardcode. replace.
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
                    <div className="fab-left">
                        <Fab color="primary" aria-label="Delete" onClick={() => {
                            this.handleToPrevFromMove(this.props.move_index)
                        }}>
                            <ArrowBackIcon/>
                        </Fab>
                    </div>
                    <div className="fab-right">
                        <Fab color="primary" aria-label="Delete" onClick={() => {
                            this.handleToNextFromMove(this.props.move_index)
                        }}>
                            <ArrowForwardIcon/>
                        </Fab>
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
                            onPause = { ()=> {
                                console.log(' onPause hook ')
                                this.setState({ pauseTag: !this.state.pauseTag });
                                this.setState({ resumeTag: !this.state.resumeTag });
                            }} 
                            onResume = { ()=> {
                                console.log(' onResume hook ')
                                this.setState({ pauseTag: !this.state.pauseTag });
                                this.setState({ resumeTag: !this.state.resumeTag });
                            }} 
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
                                        <Timer.Minutes
                                            formatValue={(value) => `${(value < 10 ? `0${value}` : value)}:`}/>
                                        <Timer.Seconds
                                            formatValue={(value) => `${(value < 10 ? `0${value}` : value)}`}/>
                                    </div>
                                    <div>
                                        <Button id='btn_pause' variant="contained" color="primary" onClick={pause} disabled={this.state.pauseTag}>Pause</Button>  
                                        <Button id='btn_resume' variant="contained" color="primary" onClick={resume} disabled={this.state.resumeTag}>Resume</Button>
                                    </div>
                                </React.Fragment>
                            )}
                        </Timer>
                    </div>
                    <div className="fab-left">
                        <Fab color="primary" aria-label="Delete" onClick={() => {
                            this.handleToPrevFromBreak(this.props.move_index)
                        }}>
                            <ArrowBackIcon/>
                        </Fab>
                    </div>
                    <div className="fab-right">
                        <Fab color="primary" aria-label="Delete" onClick={() => {
                            this.handleToNextFromBreak(this.props.move_index)
                        }}>
                            <ArrowForwardIcon/>
                        </Fab>
                    </div>
                </section>
            );
        }
    }
}

export {MoveComponent};

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

export const Move = connect(mapStateToProps, {
    load_moves,
    load_routines,
    increment_move_index,
    toggle_move_or_break,
    decrement_move_index,
    toggle_finish_routine,
    zero_move_index
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
