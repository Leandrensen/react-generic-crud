import React from 'react';
import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Modal as MaterialUIModal } from '@material-ui/core';

const Modal = (props) => {
    // const useStyles = makeStyles((theme) => ({
    //     root: {
    //         height: 300,
    //         flexGrow: 1,
    //         minWidth: 300,
    //         transform: 'translateZ(0)',
    //         // The position fixed scoping doesn't work in IE 11.
    //         // Disable this demo to preserve the others.
    //         '@media all and (-ms-high-contrast: none)': {
    //             display: 'none',
    //         },
    //     },
    //     modal: {
    //         display: 'flex',
    //         padding: theme.spacing(1),
    //         alignItems: 'center',
    //         justifyContent: 'center',
    //     },
    //     paper: {
    //         width: 400,
    //         backgroundColor: theme.palette.background.paper,
    //         border: '2px solid #000',
    //         boxShadow: theme.shadows[5],
    //         padding: theme.spacing(2, 4, 3),
    //     },
    // }));
    //
    // const classes = useStyles();

    return ReactDOM.createPortal(
    return(
        <MaterialUIModal
          disablePortal
          disableEnforceFocus
          disableAutoFocus
          open
          aria-labelledby="server-modal-title"
          aria-describedby="server-modal-description"
          className={classes.modal}
          container={document.querySelector('#modal')}
        >
            <div className={classes.paper}>
                <h2 id="server-modal-title">Server-side modal</h2>
                <p id="server-modal-description">If you disable JavaScript, you will still see me.</p>
            </div>
        </MaterialUIModal>
            ,
        document.querySelector('#modal')
    );

    // return(
    //     <MaterialUIModal
    //         disablePortal
    //         disableEnforceFocus
    //         disableAutoFocus
    //         open
    //         aria-labelledby="server-modal-title"
    //         aria-describedby="server-modal-description"
    //         className={classes.modal}
    //         container={document.querySelector('#modal')}
    //     >
    //         <div className={classes.paper}>
    //             <h2 id="server-modal-title">Server-side modal</h2>
    //             <p id="server-modal-description">If you disable JavaScript, you will still see me.</p>
    //         </div>
    //     </MaterialUIModal>
    // );
};

export default Modal;