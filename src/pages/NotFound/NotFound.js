import React from 'react';
import { BiError } from 'react-icons/bi';
import error from '../../assets/ERROR404.png';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="pt-5 text-center">
            <BiError className="icon-error"/>
            <img className="img-error" src={error} alt="La pagina que busca no fue encontrada"></img>
        </div>
    );
}

export {NotFound};