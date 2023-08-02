import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import NotesApp from './components/NotesApp';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <NotesApp />
  </Provider>,
  document.getElementById('root')
);
