import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './global.css';
import {App} from './routes/App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <App />
);
