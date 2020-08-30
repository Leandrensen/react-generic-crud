import React from 'react';
import { connect } from 'react-redux';
import StreamDelete from '../../../components/Streams/StreamDelete';

const StreamDeleteContainer = (props) => <StreamDelete {...props} />;

export default connect(null, null)(StreamDeleteContainer);
