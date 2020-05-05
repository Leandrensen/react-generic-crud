import React from 'react';
import PropTypes from 'prop-types';

const Loading = (props) => {
    const { height, width } = props;

    const loadingStyle = {
        height: height,
        width: width,
    };

    return (
        <div className='loading-container'>
            <div className='box-loading loading' style={loadingStyle} />
        </div>
    );
};

Loading.defaultProps = {
    height: '40px',
    width: '100%',
};

Loading.propTypes = {
    height: PropTypes.string,
    width: PropTypes.string,
};

export default Loading;
