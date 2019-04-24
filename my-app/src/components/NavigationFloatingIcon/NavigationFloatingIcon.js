import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const styles = theme => ({
  fab: {
    margin: theme.spacing.unit,
    position: 'absolute',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
});

function NavigationFloatingIcons(props) {
    const { classes } = props;
    return (
      <div>
        <Fab color="primary" aria-label="Delete" className={classes.fab} onClick={props.handleClick()}>
        <ArrowForwardIcon />
        </Fab>
        </ div>
    )
}

NavigationFloatingIcons.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavigationFloatingIcons)