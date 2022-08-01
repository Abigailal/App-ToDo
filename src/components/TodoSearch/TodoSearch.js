import React from 'react';
import { TodoContext } from '../../context/TodoContext';
import './TodoSearch.css';

function TodoSearch() {
  const { searchValue, setSearchValue, show } = React.useContext(TodoContext);
  
  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <>
      {show && <input
      className={`TodoSearch mt-3 px-3 ${show ? "show-element" : null}`}
      placeholder="Search task"
      value={searchValue}
      onChange={onSearchValueChange}
      />}
    </>
  );
}

export { TodoSearch };