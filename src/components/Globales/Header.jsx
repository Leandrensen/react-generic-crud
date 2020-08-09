import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { Box } from '@material-ui/core';

const Header = () => {
    // CSS ///////////////////////////
    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
        },
        toolbar: {
            justifyContent: 'space-between',
        },
    }));

    const classes = useStyles();
    ///////////////////////////////////

    return (
        <div className={classes.root}>
            <AppBar position='static'>
                <Toolbar variant='dense' className={classes.toolbar}>
                    <Button component={Link} to={'/login'} className={classes.streamer} color='inherit'>
                        Streamer
                    </Button>
                    <Box>
                        <Button component={Link} to={'/'} className={classes.streams} color='inherit'>
                            Streams
                        </Button>
                        <Button component={Link} to={'/login'} color='inherit'>
                            Login
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Header;
