import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from 'react-router-dom'

const styles = {
  root: {
    flexGrow: 1,
    color:'#3f51b5',
    textalign:'center',
    fontStyle:'italic',
    fontWeight:"bold",
    fontSize:'30px',
    // border:'1px #666 solid',
  },
  // background: '#000000'
};

function SimpleAppBar(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
        <IconButton aria-label="Home" color="inherit" component={Link} to="/routines">
          <HomeIcon/>
        </IconButton>
          <Typography variant="h6" color="inherit">
            WorkIt
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleAppBar);
