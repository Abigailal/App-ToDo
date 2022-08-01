import React from 'react';
import { BsSearch } from 'react-icons/bs';
import { TodoContext } from '../../context/TodoContext';
import './TodoSearchButton.css';


function TodoSearchButton() {

  const {setShow, show} = React.useContext(TodoContext);
    
    return [
      <button
        className="TodoSearchButton
                  d-flex justify-content-center align-items-center"
        type='button'
        onClick={() => setShow(!show)}
      >
        <BsSearch />
      </button>,
    ];
}

export { TodoSearchButton };