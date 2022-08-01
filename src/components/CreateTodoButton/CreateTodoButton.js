import React from 'react';
import { IoMdAdd } from 'react-icons/io';
import './CreateButton.css';

function CreateTodoButton(props) {

  const onClickButton = () => {
    props.setOpenModal(prevState => !prevState);
  };

  return (
    <button className="CreateTodoButton fw-bold d-flex justify-content-center align-items-center"
    onClick={onClickButton}//Evento (Todo lo que empiece por ON ayudara a recibir el evento)
    >
      <IoMdAdd/>
    </button>
  );
}

export { CreateTodoButton };

