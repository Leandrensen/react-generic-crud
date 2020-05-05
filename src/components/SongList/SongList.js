import React from 'react';
import { connect } from 'react-redux';
import { List, ListItem, ListItemText, Divider } from '@material-ui/core/';
import Loading from '../Globales/Loading';
import Button from '../Globales/Button';
import Box from '../Globales/Box';

const SongList = (props) => {
    const renderContent = () => {
        return (
            <Box justify='between' title='Song List'>
                <List>{renderList()}</List>
            </Box>
        );
    };

    const isFetching = false;

    const renderList = () => {
        return props.songs.map((song, index) => {
            return (
                <React.Fragment key={`song-${index}`}>
                    <ListItem className='song'>
                        <ListItemText>{song.title}</ListItemText>
                        <Button onClick={() => doSomething()}>Select</Button>
                    </ListItem>
                    <Divider />
                </React.Fragment>
            );
        });
    };

    const doSomething = () => {
        return;
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

export default connect(mapStateToProps)(SongList);
