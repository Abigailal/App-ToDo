import React from 'react';
import {TodoContext} from '../../context/TodoContext';
import { TodoSearch } from '../../components/TodoSearch/TodoSearch';
import { TodoSearchButton } from '../../components/SearchButton/TodoSearchButton';
import { EditButtonProfile } from '../../components/EditButtonProfile/EditButtonProfile';
import { DateToday } from '../../components/DateToday/DateToday';
import { TodoCounter } from '../../components/TodoCounter/TodoCounter';
import { TodoItem } from '../../components/TodoItem/TodoItem';
import { TodoList } from '../../containers/TodoList/TodoList';
import { Modal } from '../../components/Modal/Modal';
import { CreateTodoButton } from '../../components/CreateTodoButton/CreateTodoButton';
import { TodoForm } from '../../containers/TodoForm/TodoForm';
import {TodoError} from '../../components/TodoError/TodoError';
import {TodoLoading} from '../../components/TodoLoading/TodoLoading';
import {EmptyTodo} from '../../components/EmptyTodo/EmptyTodo';
import {Perfil} from '../../components/ModalPerfil/PerfilModal';
import { Profile } from '../../components/Profile/Profile';
import {PerfilForm} from '../../containers/PerfilForm/PerfilForm';
import './TaskMenu.css';

const TaskMenu = () => {
    const {
        error,
        loading,
        searchedTodos,
        completeTodo, deleteTodo,
        openModal, setOpenModal,
        openEdit, setOpenEdit,
        avatar, setAvatar
    } = React.useContext(TodoContext);

    return (
        <React.Fragment>
            <header className='px-4 py-3 container'>
                <div className='row'>
                    <div className='col-12 d-flex justify-content-between align-items-center'>
                        <TodoSearchButton />
                        <h3 className=' fs-5'>My Profile</h3>
                        <EditButtonProfile
                            setOpenEdit={setOpenEdit}
                            openEdit={openEdit} />
                    </div>
                    <div className='col d-flex justify-content-center align-items-center'>
                        <Profile avatar={avatar} />
                    </div>
                    <div className='col-12'>
                        <TodoSearch />
                    </div>
                </div>
            </header>
            <main className='mt-3'>
                <div className='container tasks-container py-4 px-4'>
                    <div className='row align-items-center '>
                        <div className='col'>
                            <h2 className='fw-bold'>My Tasks</h2>
                            <DateToday />
                        </div>
                        <div className='col-4 text-center'>
                            <TodoCounter/>
                            <CreateTodoButton setOpenModal={setOpenModal} />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col task-list'>
                            <TodoList>
                                {error && <TodoError />}
                                {loading && <TodoLoading />}
                                {(!loading && !searchedTodos.length) && <EmptyTodo />}
                                {searchedTodos.map(todo => (
                                    <TodoItem
                                        key={todo.text}
                                        text={todo.text}
                                        completed={todo.completed}
                                        onComplete={() => completeTodo(todo.text)}
                                        onDelete={() => deleteTodo(todo.text)}
                                    />
                                ))}
                            </TodoList>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col d-flex justify-content-center align-items-center'>
                            {!!openModal && (
                                <Modal>
                                    <TodoForm />
                                </Modal>
                            )}
                            {!!openEdit && (
                                <Perfil>
                                    <PerfilForm
                                        setOpenEdit={setOpenEdit}
                                        avatar = {avatar}
                                        setAvatar = {setAvatar}
                                    />
                                </Perfil>
                            )}
                        </div>
                    </div>
                </div>
            </main>
        </React.Fragment>
    );
}

export {TaskMenu};