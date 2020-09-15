import React, {useEffect} from 'react';
import { Box, Button, FormControl, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup';


const StreamEdit = (props) => {
    // CSS ///////////////s////////////
    const useStyles = makeStyles((theme) => ({
        root: {
            margin: theme.spacing(2),
        },
        title: {
          paddingBottom: '10px',
        },
        formControl: {},
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

    const { stream, fetchStream } = props;

    useEffect(() => {
        fetchStream(props.match.params.id);
    }, []);

    const schema = yup.object().shape({
        title: yup.string().required(),
        description: yup.string().required(),
    });

    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (formValues) => {
        // editStream(formValues);
    };

    return (
        <Box className={classes.root}>
            {stream && (
                <Box>
                    <Box  className={classes.title}>
                        <Typography variant={'h3'}>
                            Edit a Stream
                        </Typography>
                    </Box>
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
            )}
            {!stream && (<Box>Loading...</Box>)}
        </Box>
    );
};

export default StreamEdit;
