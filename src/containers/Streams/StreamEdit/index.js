import React from 'react';
import { connect } from 'react-redux';
import StreamEdit from '../../../components/Streams/StreamEdit';

const StreamEditContainer = (props) => <StreamEdit {...props} />;

export default connect(null, null)(StreamEditContainer);
