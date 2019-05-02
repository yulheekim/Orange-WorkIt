import React, { Component } from 'react';
import { connect } from 'react-redux';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import { Link, Redirect } from 'react-router-dom';


import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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


class ListRoutines2Component extends Component {
    handleClickRoutine = (routine_id) => {
        this.props.load_moves(routine_id);
    }
    populateRoutines = (routines) => {
        //console.log(routines)
        const img_lst = [squats, plank, crunches];
        return _.map(routines, (routine, index) => {
            return (
                <Card className="background" key={index}>
                    <CardActionArea>
                        <img src={require(`../../assets/0.jpg`)}/>
                        <CardMedia
                        // className={classes.media}
                        // image={"../../assets/" + routine.id + ".jpg"}
                        title={routine.name}
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {routine.name}
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>


                /* <ListItem button key={index} onClick={() => this.handleClickRoutine(routine.id)}>
                    <ListItemText primary={routine.name}/>
                    <KeyboardArrowRight/>
                </ListItem> */
            )
        });
    }
    
    render() {
        if (this.props.loading_moves) {
            return (
                <Redirect to="moves" />
            )
        }
        return (
        // <Card className="card">
        //     <List className="root">
                this.populateRoutines(this.props.routines)
            /* </List>
        </Card> */
        );
    }
}

export { ListRoutines2Component };

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

export const ListRoutines2 = connect(mapStateToProps, {
    load_moves,
    load_routines,
})(ListRoutines2Component);
