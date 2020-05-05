import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import SongList from './SongList/SongList';

export default function App() {
    return (
        <React.Fragment>
            <CssBaseline />
            <div>
                <SongList />
            </div>
        </React.Fragment>
    );
}
