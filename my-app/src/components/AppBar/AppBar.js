import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import { Link, Redirect } from 'react-router-dom';

import {
    set_go_home
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

class AppBarComponent extends Component {
  // const { classes } = props;

  handleHome = () => {
      if (this.props.user_id != 0) {
          this.props.set_go_home(true);
      }
  };

  render() {
    if(this.props.go_home) {
        return (
          <Redirect to="routines" />
        );
    }

    return (
      <div>
        <AppBar position="static">
          <Toolbar>
          <IconButton aria-label="Home" color="inherit" onClick={this.handleHome}>
            <HomeIcon/>
          </IconButton>
            <Typography className="text" variant="h6" text-align='center' color="inherit"  text-align="center" display="flex">
                WorkIt
            </Typography>
            {/* <div >WorkIt</div> */}
          </Toolbar>
        </AppBar>
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

export const Header = connect(mapStateToProps, {
    set_go_home
})(AppBarComponent);
