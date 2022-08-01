import React from 'react';
import { StartButton } from '../../components/StartButton/StartButton';
import './Home.css';

const Home = () => {
    return (
        <div className='img-fondo d-flex justify-content-center align-items-center'>
            <StartButton/>
        </div>
    );
}

export {Home};