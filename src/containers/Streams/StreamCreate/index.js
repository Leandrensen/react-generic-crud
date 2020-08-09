import React from 'react';
import { connect } from 'react-redux';
import StreamCreate from '../../../components/Streams/StreamCreate';

const StreamCreateContainer = (props) => <StreamCreate {...props} />;

export default connect(null, null)(StreamCreateContainer);
