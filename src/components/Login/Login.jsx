import React, { useEffect, useState } from 'react';
import Box from '@material-ui/core/Box';
import { Grid, TextField, FormControl } from '@material-ui/core';

const handleSubmit = () => {
    return;
};

const clearErrors = () => {
    return;
};

const Login = (props) => {
    return (
        <Box>
            <FormControl
                className='login'
                noValidate
                autoComplete='off'
                onSubmit={handleSubmit}
                onChange={clearErrors}
                style={{ width: '100%' }}>
                <Grid
                    container
                    spacing={1}
                    direction='column'
                    alignItems='center'
                    justify='center'
                    style={{ minHeight: '100vh' }}>
                    <Grid item xs={12}>
                        <TextField
                            type='text'
                            label='Username'
                            variant='outlined'
                            required={true}
                            error={false}
                            autoFocus={true}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField type='password' label='Password' variant='outlined' required={true} error={false} />
                    </Grid>
                </Grid>
            </FormControl>
        </Box>
    );
};

export default Login;
