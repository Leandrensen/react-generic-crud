import React from 'react';
import { Grid } from '@material-ui/core';
import PropTypes from 'prop-types';

const Box = (props) => {
    const { title, subTitle, width, children, justify, spacing } = props;

    return (
        <div className='box-container'>
            <Grid container className={justify} spacing={spacing}>
                <Grid item xs={4} className='descripcion'>
                    <h3>{title}</h3>
                    <p>{subTitle}</p>
                </Grid>
                <Grid item xs={width} className='contenido'>
                    {children}
                </Grid>
            </Grid>
        </div>
    );
};

Box.defaultProps = {
    title: '',
    subTitle: '',
    width: 6,
    justify: 'between',
    spacing: 0,
};

Box.propTypes = {
    title: PropTypes.string,
    subTitle: PropTypes.string,
    width: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8]),
    justify: PropTypes.oneOf(['end', 'between', 'normal']),
    spacing: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
};

export default Box;
