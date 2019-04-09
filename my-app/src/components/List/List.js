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

function FolderList(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
    <List className={classes.root}>
      <ListItem button>
        <Avatar>
          <ImageIcon />
        </Avatar>
        <ListItemText primary="Photos" secondary="Jan 9, 2014" />
        <KeyboardArrowRight />
      </ListItem>
      <ListItem button>
        <Avatar>
          <WorkIcon />
        </Avatar>
        <ListItemText primary="Work" secondary="Jan 7, 2014" />
        <KeyboardArrowRight />
      </ListItem>
      <ListItem button>
        <Avatar>
          <BeachAccessIcon />
        </Avatar>
        <ListItemText primary="Vacation" secondary="July 20, 2014" />
        <KeyboardArrowRight />
      </ListItem>
    </List>
    </Card>
  );
}

FolderList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FolderList);