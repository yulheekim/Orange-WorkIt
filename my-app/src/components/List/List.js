import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import _ from 'lodash';

import Card from '@material-ui/core/Card';
import squats from '../../assets/squats.png';
import plank from '../../assets/plank.png';
import crunches from '../../assets/crunches.png';

const styles = theme => ({
  root: {
    width: '100%',
    // maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  card: {
    width: '100%',
    justify: "center"
  }
});

function FolderList(props) {
    const {classes} = props;

    return (<Card className={classes.card}>
        <List className={classes.root}>

            <ListItem button="button">
                    <Avatar src={plank}>
                    </Avatar>
                    <ListItemText primary={props.moves[0].name} secondary={"time: " + props.moves[0].total_time + "sec"} />
                    <KeyboardArrowRight/>
            </ListItem>

            <ListItem button="button">
                    <Avatar src={squats}></Avatar>
                <ListItemText primary={props.moves[1].name} secondary={"time: " + props.moves[1].total_time + "sec"}/>
                <KeyboardArrowRight/>
            </ListItem>

            <ListItem button="button">
                <Avatar src={crunches}>
                </Avatar>
                <ListItemText primary={props.moves[2].name} secondary={"time: " + props.moves[2].total_time + "sec"}/>
                <KeyboardArrowRight/>
            </ListItem>
        </List>
    </Card>);
}

FolderList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FolderList);
