import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { Link } from 'react-router-dom';

const styles = theme => ({
  fab: {
    margin: theme.spacing.unit,
    position: 'fixed',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
});

function FloatingActionButtons(props) {
    const { classes } = props;
    return (
      <div>
        <Fab color="primary" variant="extended" aria-label="Delete" className={classes.fab} component={Link} to={props.link}>
        <AddIcon className={classes.extendedIcon} />
          {props.name}
        </Fab>
        </ div>
    )
}

FloatingActionButtons.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FloatingActionButtons)