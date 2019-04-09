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

// function ListCard(props) {
//   const { classes } = props;
//   return (
//     <Grid
//     container
//     spacing={0}
//     direction="column"
//     alignItems="center"
//     justify="center"
//     style={{ minHeight: '10vh' }}
//     >

//     <Grid item xs={12}>
//       {FolderList(props)}
//     </Grid>
//     </Grid>
//  )}
// function populateRoutines(first_routine) {
//     console.log(first_routine)
//     if (first_routine.moves) {
//     return _.map(first_routine.moves, (move, index) => {
//         return (
//
//             )
//     });
// }
// }
function FolderList(props) {
    const {classes} = props;

    const first_routine = props.routines[0];
    setTimeout(() => { first_routine && console.log(first_routine.moves); }, 1000);

    return (<Card className={classes.card}>
        <List className={classes.root}>

            <ListItem button="button">
                    <Avatar>
                        <ImageIcon/>
                    </Avatar>
                    <ListItemText primary={first_routine.moves[0].name} secondary={"time: " + first_routine.moves[0].total_time + "sec"} />
                    <KeyboardArrowRight/>
            </ListItem>

            <ListItem button="button">
                <Avatar>
                    <WorkIcon/>
                </Avatar>
                <ListItemText primary={first_routine.moves[1].name} secondary={"time: " + first_routine.moves[1].total_time + "sec"}/>
                <KeyboardArrowRight/>
            </ListItem>

            <ListItem button="button">
                <Avatar>
                    <BeachAccessIcon/>
                </Avatar>
                <ListItemText primary={first_routine.moves[2].name} secondary={"time: " + first_routine.moves[2].total_time + "sec"}/>
                <KeyboardArrowRight/>
            </ListItem>
        </List>
    </Card>);
}

FolderList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FolderList);
