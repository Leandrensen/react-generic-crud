import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import {
    Box,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    ListItemSecondaryAction,
    IconButton,
    Divider,
    Typography,
    Button,
    Tooltip,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

const StreamList = (props) => {
    // CSS ///////////////////////////
    const useStyles = makeStyles((theme) => ({
        streams: {
            width: '95%',
            margin: theme.spacing(2),
        },
        streamsList: {
          padding: '10px 0',
        },
        stream: {},
        listItem: {
            padding: '5px',
        },
        icon: {
          color: 'black',
          minWidth: '35px',
        },
        buttonContainer: {
            display: 'flex',
            justifyContent: 'flex-end',
        },
        tooltip: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '56px',
            minWidth: '85px',
            fontSize: '13px',
            backgroundColor: 'rgba(57, 57, 57, 0.9)',
            boxShadow: '0 3px 6px 0 rgba(0, 0, 0, .16)',
        },
    }));

    const classes = useStyles();
    /////////////////////////////////

    const { streams, currentUserId, fetchStreams } = props;

    useEffect(() => {
        fetchStreams();
    }, []);

    const renderAdmin = (stream) => {
        if(stream.userId === currentUserId) {
            return (
                <ListItemSecondaryAction>
                    <Tooltip arrow classes={classes.tooltip} title='Delete'>
                        <IconButton edge="end" aria-label="delete">
                            <DeleteIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip arrow classes={classes.tooltip} title='Edit'>
                        <IconButton edge="end" aria-label="edit">
                            <EditIcon />
                        </IconButton>
                    </Tooltip>
                </ListItemSecondaryAction>
            );
        }
    }

    const renderList = () => {
        return streams.map((stream) => {
            return (
                <div className={classes.stream} key={stream.id}>
                    <List dense component="nav" aria-label="main streams">
                        <ListItem button className={classes.listItem}>
                            <ListItemIcon className={classes.icon} >
                                <PhotoCameraIcon />
                            </ListItemIcon>
                            <ListItemText primary={stream.title} secondary={stream.description} />
                        </ListItem>
                        {renderAdmin(stream)}
                    </List>
                    <Divider />
                </div>
            );
        });
    };

    return (
        <Box className={classes.streams}>
            <Typography variant={'h3'}>
                Streams
            </Typography>
            <Box className={classes.streamsList}>
                {streams && renderList()}
            </Box>
            <Box className={classes.buttonContainer}>
                <Button component={Link} to={'/streams/new'} variant='contained' color='primary'>
                    Create Stream
                </Button>
            </Box>
        </Box>
    );
};

export default StreamList;
