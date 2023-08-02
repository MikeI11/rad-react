import React, { useState } from 'react';
import NotesTable from './NotesTable';
import SummaryTable from './SummaryTable';
import "./NotesApp.css";
const NotesApp = () => {
  const [notes, setNotes] = useState([]);

  const addNote = () => {
    const newNote = { id: notes.length + 1, text: 'New Note' };
    setNotes([...notes, newNote]);
  };

  return (
    <div className="container mt-5">
      <NotesTable notes={notes} />
      <form id="addNoteForm" className="mb-3">
        <div className="form-row">
          <div className="col">
            <button type="button" className="btn btn-primary btn-block" onClick={addNote}>
              Create Note
            </button>
          </div>
        </div>
      </form>
      <SummaryTable notes={notes} />
    </div>
  );
};

export default NotesApp;
