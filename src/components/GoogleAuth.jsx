import React, { useEffect } from 'react';
import { Box } from '@material-ui/core';

const GoogleAuth = () => {
    useEffect(() => {
        window.gapi.signin2.render('my-signin2', {
            scope: 'email',
            width: 'auto',
            height: 50,
            longtitle: true,
            theme: 'dark',
            onsuccess: onSuccess,
            onfailure: onFailure,
        });
    }, []);

    const onSuccess = () => {
        return;
    };

    const onFailure = () => {
        return;
    };

    return <Box id='my-signin2' data-onsuccess='onSignIn'></Box>;
};

export default GoogleAuth;
