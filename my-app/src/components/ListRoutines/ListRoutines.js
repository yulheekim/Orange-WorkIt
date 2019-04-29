import React, { Component } from 'react';
import { connect } from 'react-redux';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import { Link, Redirect } from 'react-router-dom';

import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import _ from 'lodash';

import squats from '../../assets/squats.png';
import plank from '../../assets/plank.png';
import crunches from '../../assets/crunches.png';

import {
    load_moves,
    load_routines,
} from '../../reducers/reducer';
// import './styles.css';


class ListRoutinesComponent extends Component {
    handleClickRoutine = (routine_id) => {
        this.props.load_moves(routine_id);
    }
    populateRoutines = (routines) => {
        //console.log(routines)
        const img_lst = [squats, plank, crunches];
        return _.map(routines, (routine, index) => {
            return (
                <ListItem button key={index} onClick={() => this.handleClickRoutine(routine.id)}>
                    <ListItemText primary={routine.name} secondary={"id: " + routine.id}/>
                    <KeyboardArrowRight/>
                </ListItem>
            )
        });
    }
    render() {
        if (this.props.loading_moves) {
            return (
                <Redirect to="moves" />
            )
        }
        return (<Card className="card">
            <List className="root">
                {this.populateRoutines(this.props.routines)}
            </List>
        </Card>);
    }
}

export { ListRoutinesComponent };

const mapStateToProps = (state, ownProps) => {
    const { reducer } = state;
    const { loading_moves, loading, moves, routines } = reducer;
    return {
        ...ownProps,
        loading_moves,
        loading,
        moves,
        routines
    };
};

export const ListRoutines = connect(mapStateToProps, {
    load_moves,
    load_routines,
})(ListRoutinesComponent);
