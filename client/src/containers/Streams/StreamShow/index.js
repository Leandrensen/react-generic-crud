import React from 'react';
import { connect } from 'react-redux';
import StreamShow from '../../../components/Streams/StreamShow';

const StreamShowContainer = (props) => <StreamShow {...props} />;

export default connect(null, null)(StreamShowContainer);
