import React from 'react';
import { reduxForm } from 'redux-form';
import StreamCreate from '../../components/Streams/StreamCreate';

const StreamCreateContainer = (props) => <StreamCreate {...props} />;

const validate = (formValues) => {
    const errors = {};

    if (!formValues.title) {
        errors.title = 'Please enter a title';
    }

    if (!formValues.description) {
        errors.description = 'Please enter a description';
    }

    return errors;
};

export default reduxForm({ form: 'streamCreate', validate: validate })(StreamCreateContainer);
