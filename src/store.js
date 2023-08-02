import { configureStore } from '@reduxjs/toolkit';
import notesReducer from './reducers/notesReducer';

const store = configureStore({
  reducer: {
    notesData: notesReducer,
  },
});

export default store;

