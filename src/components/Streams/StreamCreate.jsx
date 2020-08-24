import React from 'react';
import { Field } from 'redux-form';
import { Box, TextField, FormControl, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const renderTextField = (formProps) => {
    const {
        input,
        label,
        meta: { touched, invalid, error },
    } = formProps;

    return (
        <TextField
            type='text'
            variant='outlined'
            label={label}
            error={touched && invalid}
            helperText={touched && error}
            fullWidth={true}
            {...input}
        />
    );
};

const StreamCreate = (props) => {
    // CSS ///////////////////////////
    const useStyles = makeStyles((theme) => ({
        root: {
            display: 'flex',
            margin: theme.spacing(3),
        },
        form: {
            width: '95%',
        },
        formControl: {},
        field: {
            width: '100%',
            '&:first-of-type': {
                marginTop: 0,
            },
            marginTop: theme.spacing(3),
        },
        submitButton: {
            marginTop: theme.spacing(3),
        },
    }));

    const classes = useStyles();
    /////////////////////////////////

    const { handleSubmit } = props;

    const onSubmit = (formValues) => {
        console.log(formValues);
    };

    return (
        <Box className={classes.root}>
            <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
                <FormControl className={classes.formControl} fullWidth={true}>
                    <Box className={classes.field}>
                        <Field name='title' component={renderTextField} label='Title' className={classes.field} />
                    </Box>
                    <Box className={classes.field}>
                        <Field name='description' component={renderTextField} label='Description' />
                    </Box>
                </FormControl>
                <Button type='submit' variant='contained' color='primary' className={classes.submitButton}>
                    Submit
                </Button>
            </form>
        </Box>
    );
};

export default StreamCreate;
