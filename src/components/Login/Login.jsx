import React, { useEffect, useState } from 'react';
import { Box, Grid, TextField, FormControl } from '@material-ui/core';

const Login = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {
        return;
    };

    const clearErrors = () => {
        return;
    };

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
