import React from 'react';
import './TodoList.css';

function TodoList(props) {
  return (
    <section>
      <ul className='px-3 py-0'>
        {props.children}
      </ul>
    </section>
  );
}

export { TodoList };

 //{PROPS.CHILDEN} propiedad donde le mandamos la lista iteracion de todoItems