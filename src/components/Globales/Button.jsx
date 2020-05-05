import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { rippleClickAnimation } from '../../helpers/animations';

const Button = (props) => {
    const { onClick, disabled, loading, type, variant, color, fullWidth } = props;

    function handleClick(e) {
        rippleClickAnimation(e);
        onClick(e);
    }

    const classForProps = clsx([
        'button-container',
        'ripple',
        fullWidth && 'full-width',
        loading && 'loading',
        variant ? variant : 'contained',
        color && color,
    ]);

    return (
        <button onClick={handleClick} type={type} disabled={disabled} className={classForProps}>
            <span className='button-name'>{props.children}</span>
            {loading && <span className='button-loading'>Cargando...</span>}
        </button>
    );
};

Button.defaultProps = {
    children: null,
    fullWidth: null,
    color: null,
    variant: null,
    type: 'button',
    loading: null,
    disabled: false,
    onClick: () => {},
};

Button.propTypes = {
    children: PropTypes.string.isRequired,
    fullWidth: PropTypes.bool,
    color: PropTypes.oneOf(['primary', 'primary-light', 'secondary']),
    variant: PropTypes.string,
    type: PropTypes.oneOf(['submit', 'button']),
    loading: PropTypes.bool,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
};

export default Button;
