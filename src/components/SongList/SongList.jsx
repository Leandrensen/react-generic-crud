import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { List, ListItem, ListItemText, Divider } from '@material-ui/core/';
import { selectSong } from '../../actions';
import Loading from '../Globales/Loading';
import Button from '../Globales/Button';
import Box from '../Globales/Box';

const SongList = (props) => {
    useEffect(() => {
        console.log('useEffect');
    }, []);

    const renderContent = () => {
        return (
            // <Box justify='between' title='Song List'>
            <>
                <List>{renderList()}</List>
            </>
            // </Box>
        );
    };

    const isFetching = false;

    const renderList = () => {
        return props.songs.map((song, index) => {
            return (
                <React.Fragment key={`song-${index}`}>
                    <ListItem className='song'>
                        <ListItemText>{song.title}</ListItemText>
                        <Button onClick={() => props.selectSong(song)}>Select</Button>
                    </ListItem>
                    <Divider />
                </React.Fragment>
            );
        });
    };

    const renderLoading = () => {
        return (
            <div style={{ padding: '30px 0' }}>
                <Loading width='250px' />
                <Loading height='280px' />
            </div>
        );
    };

    return <div>{isFetching ? renderLoading() : renderContent()}</div>;
};

const mapStateToProps = (state) => {
    return { songs: state.songs };
};

export default connect(mapStateToProps, { selectSong: selectSong })(SongList);
