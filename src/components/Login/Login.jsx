import React, { useEffect, useState } from 'react';
import { Box, Grid, TextField, FormControl } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const Login = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {
        return;
    };

    const clearErrors = () => {
        return;
    };

    // CSS ///////////////////////////
    const useStyles = makeStyles((theme) => ({
        login: {
            minHeight: '94vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        },
    }));

    const classes = useStyles();
    /////////////////////////////////

    return (
        <Box className={classes.login}>
            <FormControl className='login' noValidate autoComplete='off' onSubmit={handleSubmit} onChange={clearErrors}>
                <Grid container spacing={1} direction='column' alignItems='center' justify='center'>
                    <Grid item>
                        <TextField
                            type='text'
                            label='Username'
                            variant='outlined'
                            error={false}
                            onChange={(e) => setUsername(e.target.value)}
                            autoFocus={true}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            type='password'
                            label='Password'
                            variant='outlined'
                            error={false}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Grid>
                </Grid>
            </FormControl>
        </Box>
    );
};

export default Login;
