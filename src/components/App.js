import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import SongList from './SongList/SongList';
import SongDetail from './SongDetail/SongDetail';

export default function App() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <SongList />
                </Grid>
                <Grid item xs={6}>
                    <SongDetail />
                </Grid>
            </Grid>
        </React.Fragment>
    );
}
