import React, { useContext, useState } from 'react';
import { TodoContext } from '../../context/TodoContext';
import './TodoForm.css';

const TodoForm = () => {
    const [ newTodoValue, setNewTodoValue ] = useState('');
    const {
        addTodo,
        setOpenModal,
      } = useContext(TodoContext);

    const onCancel = () => {
        setOpenModal(false); //Cierra el modal
    }

    
    /*const onEnter=(event)=> {
        if(event.keyCode === 13) {
            onSubmit(event);
        } else if(event.keyCode === 27) {
            setOpenModal(false);
        }
    }*/

    const onSubmit = (event) => {
        event.preventDefault();//Metodo que ayuda a no recargar la pagina al enviar el submit
        addTodo(newTodoValue); //Manda el nuevo valor del task creado
        setOpenModal(false); //Cierra el modal
    }

    const onChange = (event) => {
        setNewTodoValue(event.target.value); //obtenemos el evento que recibimos, vemos su cambio y enviamos elnuevo valor set
    }

    return(
        <form onSubmit={onSubmit} className="px-5 py-5">
            <label></label>
            <textarea //Queremos que pueda escribir el largod de texto que quiera
                className="formTarea text-center"
                value={newTodoValue}
                onChange={onChange}
                //onKeyDown={onEnter}
                placeholder="New Task..."
            />
            <div className="d-flex justify-content-center align-items-center">
                <button
                    className="btn btn-secondary"
                    type="button"
                    onClick={onCancel}
                >
                    Cancel
                </button>
                <button
                    className="ms-4 btn btn-success"
                    type="submit"
                >
                    Accept
                </button>
            </div>
        </form>
    );
}

export {TodoForm};