import React from 'react';
import { connect } from 'react-redux';
import StreamList from '../../../components/Streams/StreamList';

const StreamListContainer = (props) => <StreamList {...props} />;

export default connect(null, null)(StreamListContainer);
