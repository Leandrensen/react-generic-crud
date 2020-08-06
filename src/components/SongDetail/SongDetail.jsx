import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../../actions';
import { CircularProgress } from '@material-ui/core';

const SongDetail = (props) => {
    const selectedSong = props.selectedSong;

    useEffect(() => {}, []);

    const renderContent = () => {
        if (!selectedSong) {
            return <div>Select a song</div>;
        }

        return (
            // <Box justify='between' title='Song List'>
            <>
                <div>
                    <h3>Details for:</h3>
                    <p>
                        Title: {selectedSong.title}
                        <br />
                        Duration: {selectedSong.duration}
                    </p>
                </div>
            </>
            // </Box>
        );
    };

    const isFetching = false;

    const renderLoading = () => {
        return (
            <div style={{ padding: '30px 0' }}>
                <CircularProgress />
            </div>
        );
    };

    return <div>{isFetching ? renderLoading() : renderContent()}</div>;
};

const mapStateToProps = (state) => {
    return { selectedSong: state.selectedSong };
};

export default connect(mapStateToProps, { selectSong: selectSong })(SongDetail);