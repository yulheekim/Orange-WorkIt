import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { AppBar as MatAppBar} from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import { Link, Redirect } from 'react-router-dom'

import {
    toggle_go_home
} from '../../reducers/reducer';

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

class AppBarComponent extends React.Component {
  // const { classes } = props;

  render() {
    if(this.props.go_home) {
        return (
            <Redirect to="routines" />
        );
    }

    return (
      <div>
        <MatAppBar position="static">
          <Toolbar>
          <IconButton aria-label="Home" color="inherit" onClick={this.props.toggle_go_home()}>
            <HomeIcon/>
          </IconButton>
            <Typography variant="h6" color="inherit">
              WorkIt
            </Typography>
          </Toolbar>
        </MatAppBar>
      </div>
    );
  }
}

// AppBarComponent.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export { AppBarComponent };

// export default withStyles(styles)(AppBarComponent);

const mapStateToProps = (state, ownProps) => {
    const { reducer } = state;
    const { user_id, go_home } = reducer;
    return {
        ...ownProps,
        user_id,
        go_home
    };
};

export const AppBar = connect(mapStateToProps, {
    toggle_go_home
})(AppBarComponent);
