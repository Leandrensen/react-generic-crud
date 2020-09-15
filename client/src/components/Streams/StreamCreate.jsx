import React from 'react';
import { Box, TextField, FormControl, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup';

const StreamCreate = (props) => {
    // CSS ///////////////////////////
    const useStyles = makeStyles((theme) => ({
        root: {
            margin: theme.spacing(3),
        },
        textField: {
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

    const { createStream } = props;

    const schema = yup.object().shape({
        title: yup.string().required(),
        description: yup.string().required(),
    });

    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (formValues) => {
        createStream(formValues);
    };

    return (
        <Box className={classes.root}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl fullWidth={true}>
                    <TextField
                        className={classes.textField}
                        inputRef={register}
                        name='title'
                        label='Title'
                        type='text'
                        variant='outlined'
                        error={errors.title !== undefined}
                        helperText={errors.title?.message}
                    />
                    <TextField
                        className={classes.textField}
                        inputRef={register}
                        name='description'
                        label='Description'
                        type='text'
                        variant='outlined'
                        error={errors.description !== undefined}
                        helperText={errors.description?.message}
                    />
                </FormControl>
                <Button type='submit' variant='contained' color='primary' className={classes.submitButton}>
                    Submit
                </Button>
            </form>
        </Box>
    );
};

export default StreamCreate;
