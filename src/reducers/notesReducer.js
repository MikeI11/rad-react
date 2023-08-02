import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: 1, name: 'Shopping list', time: '25/07/2023 10:30', content: 'Tomatoes, bread', category: 'Task', dates: '25/07/2023', archived: false },
  { id: 2, name: 'The theory of evolution', time: '25/07/2023 11:15', content: 'The evolution ensures the existence', category: 'Random Thought', dates: '29/07/2023', archived: false },
  { id: 3, name: 'New feature', time: '25/07/2023 13:45', content: 'Implement new', category: 'Idea', dates: '29/07/2023', archived: false },
  { id: 4, name: 'William Gaddins', time: '25/07/2023 13:45', content: 'Power does not contain', category: 'Quote', dates: '29/07/2023', archived: false },
  { id: 5, name: 'Books', time: '25/07/2023 13:45', content: 'The lean Startup', category: 'Task', dates: '29/07/2023', archived: false },
];

const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    editNote: (state, action) => {
      const { id, name, content } = action.payload;
      const note = state.find((note) => note.id === id);
      if (note) {
        note.name = name;
        note.content = content;
      }
    },
    deleteNote: (state, action) => {
      const id = action.payload;
      return state.filter((note) => note.id !== id);
    },
    archiveNote: (state, action) => {
      const id = action.payload;
      const note = state.find((note) => note.id === id);
      if (note) {
        note.archived = !note.archived;
      }
    },
    updateNoteData: (state, action) => {
      const { id, field, value } = action.payload;
      const note = state.find((note) => note.id === id);
      if (note) {
        note[field] = value;
      }
    },
    addNote: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { editNote, deleteNote, archiveNote, updateNoteData, addNote } = notesSlice.actions;

export default notesSlice.reducer;
