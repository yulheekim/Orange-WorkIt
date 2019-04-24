import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { connect } from 'react-redux';


import {
  increment_move_index,
  decrement_move_index
} from '../../reducers/reducer';

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

function handleSkipNext(idx) {
  increment_move_index(idx);
}

function NavigationFloatingIcons(props) {
    const { classes } = props;
    return (
      <div>
        <Fab color="primary" aria-label="Delete" className={classes.fab} onClick={() => { handleSkipNext(props.move_idx) }}>
        <ArrowForwardIcon />
        </Fab>
        </ div>
    )
}

NavigationFloatingIcons.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavigationFloatingIcons)

const mapStateToProps = (state, ownProps) => {
  const { reducer } = state;
  const { loading, moves, move_index, move_or_break } = reducer;
  return {
      ...ownProps,
      move_index,
  };
};

export const NavigationFloating = connect(mapStateToProps, {
  increment_move_index,
  decrement_move_index
})(NavigationFloatingIcons);