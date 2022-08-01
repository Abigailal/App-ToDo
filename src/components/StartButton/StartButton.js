import React from 'react';
import { Link } from 'react-router-dom';
import './StartButton.css';

const StartButton = () => {
    return (
        <Link to='/Task-Menu' type='button'> Get Started </Link>
    );
}

export {StartButton};