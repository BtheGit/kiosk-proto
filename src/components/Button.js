import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({
    className = '',
    onClick,
    children
}) => (
    <div 
        className={`button ${ className }`}
        onClick={ onClick }
    >
        { children }
    </div>
)

export default Button;