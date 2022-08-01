import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import { Layout } from '../containers/Layout';
import { Home } from '../pages/Home/Home';
import { NotFound } from '../pages/NotFound/NotFound';
import { TaskMenu } from '../pages/TaskMenu/TaskMenu';
import {TodoContext} from '../context/TodoContext';
import { useTodos } from '../hooks/useTodos';

function App() {
	const initialState = useTodos();
  	return (
		<TodoContext.Provider value = {initialState}>
    		<BrowserRouter basename="/ToDo-App">
				<Routes>
					<Route exact path="/" element={<Home/>} />
					<Route exact path="/Task-Menu" element={<TaskMenu/>} />
          			<Route path="*" element={<NotFound/>} />
				</Routes>
			</BrowserRouter>
		</TodoContext.Provider>
  	);
}

export {App};
