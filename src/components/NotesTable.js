import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editNote, deleteNote, archiveNote, updateNoteData } from '../reducers/notesReducer';

const NotesTable = () => {
  const notesData = useSelector((state) => state.notesData);
  const dispatch = useDispatch();

  return (
    <table className="table table-bordered">
      <thead className="first-row">
        <tr>
          <th>Name</th>
          <th>Created</th>
          <th>Category</th>
          <th>Content</th>
          <th>Dates</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody id="notesTableBody">
        {notesData.map((note) => (
          <tr key={note.id} id={`noteRow-${note.id}`} style={{ display: note.archived ? 'none' : 'table-row' }}>
            <td contentEditable="true" data-field="name">
              {note.name}
            </td>
            <td>{note.time}</td>
            <td>
              <div className="col">
                <select
                  className="form-control gray-bg"
                  onChange={(event) => dispatch(updateNoteData(event, note.id, 'category'))}
                  value={note.category}
                >
                  <option value="Task">Task</option>
                  <option value="Random Thought">Random Thought</option>
                  <option value="Idea">Idea</option>
                  <option value="Quote">Quote</option>
                </select>
              </div>
            </td>
            <td contentEditable="true" data-field="content">
              {note.content}
            </td>
            <td contentEditable="true" data-field="dates">
              {note.dates}
            </td>
            <td>
              <button className="btn btn-sm mr-1" onClick={() => dispatch(editNote(note.id))}>
                <span className="emoji">📝</span>
              </button>
              <button className="btn btn-sm" onClick={() => dispatch(deleteNote(note.id))}>
                <span className="emoji">🗑️</span>
              </button>
              <button
                className="btn btn-sm"
                onClick={() => dispatch(archiveNote(note.id))}
                data-archived={note.archived}
              >
                <span className="emoji">{note.archived ? '📚' : '📨'}</span>
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default NotesTable;
