import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import _ from 'lodash';

import Card from '@material-ui/core/Card';
import squats from '../../assets/squats.png';
import plank from '../../assets/plank.png';
import crunches from '../../assets/crunches.png';
import {connect} from "react-redux";
import {
    set_move_index,
} from "../../reducers/reducer";
import {Link} from "react-router-dom";

const styles = theme => ({
    root: {
        width: '100%',
        // maxWidth: 360,
        backgroundColor: theme.palette.background.paper
    },
    card: {
        width: '100%',
        justify: "center"
    }
});

class FolderList extends Component {
    constructor(props) {
        super(props);
    }

    handleSetMoveIndex(index) {
        this.props.set_move_index(index);
        //console.log("wow! handle set move index!  " + index);
    }

    populateMoves(moves) {
        const img_lst = [squats, plank, crunches];
        return _.map(moves, (move, index) => {
            return (
                <Link to="settime" className="back-link">
                    <ListItem button key={index} onClick={() => this.handleSetMoveIndex(index)}>
                        <Avatar src={img_lst[index % img_lst.length]}>
                        </Avatar>
                        <ListItemText primary={move.name} secondary={"time: " + move.total_time + "sec"}/>
                        <KeyboardArrowRight/>
                    </ListItem>
                </Link>
            )
        });
    }

    render() {
        return (<Card className={this.props.classes.card}>
            <List className={this.props.classes.root}>
                {this.populateMoves(this.props.moves)}
            </List>
        </Card>);
    }

}

// FolderList.propTypes = {
//     classes: PropTypes.object.isRequired
// };

const mapStateToProps = (state, ownProps) => {
    const {reducer} = state;
    const {move_index} = reducer;
    return {
        ...ownProps,
        move_index,
    };
};

const ExportList = connect(mapStateToProps, {
    set_move_index
})(FolderList);

export default withStyles(styles)(ExportList);
