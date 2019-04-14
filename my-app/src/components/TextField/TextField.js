import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    dense: {
        marginTop: 19,
    },
    menu: {
        width: 200,
    },
});

const currencies = [
    {
        value: 'USD',
        label: '$',
    },
    {
        value: 'EUR',
        label: '€',
    },
    {
        value: 'BTC',
        label: '฿',
    },
    {
        value: 'JPY',
        label: '¥',
    },
];

class TextFields extends React.Component {
    state = {
        name: 'name',
        age: '',
        multiline: 'Controlled',
        currency: 'EUR',
    };

    // handleChange = name => event => {
    //   this.setState({ [name]: event.target.value });
    //   var inputValue = { [name]: event.target.value };
    // };

    render() {
        const { classes } = this.props;

        return (
            <form className={classes.container} noValidate autoComplete="off">
                <TextField
                    id="standard-full-width"
                    label={this.props.label}
                    style={{ margin:"auto" }}
                    placeholder={this.props.placeholder}
                    // onChange={this.handleChange('name')}
                    // helperText="Full width!"
                    // fullWidth
                    // margin="auto"
                    // InputLabelProps={{
                    //   shrink: true,
                    // }}
                />
            </form>
        );
    }
}

TextFields.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextFields);