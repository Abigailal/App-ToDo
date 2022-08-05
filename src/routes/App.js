import React from 'react';
import { TaskMenu } from '../pages/TaskMenu/TaskMenu';
import {TodoContext} from '../context/TodoContext';
import { useTodos } from '../hooks/useTodos';

function App() {
	const initialState = useTodos();
  	return (
		<TodoContext.Provider value = {initialState}>
			<TaskMenu/>
		</TodoContext.Provider>
  	);
}

export {App};
