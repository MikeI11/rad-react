import React from 'react';
import { useSelector } from 'react-redux';

const SummaryTable = () => {
  const notesData = useSelector((state) => state.notesData);

  const getNotesCountByCategory = (category, archived) =>
    notesData.filter((note) => note.category === category && note.archived === archived).length;

  return (
    <table className="table table-bordered">
      <thead className="first-row">
        <tr>
          <th>Category</th>
          <th>Active Notes</th>
          <th>Archived Notes</th>
        </tr>
      </thead>
      <tbody id="summaryTableBody">
        <tr>
          <td>Task</td>
          <td>{getNotesCountByCategory('Task', false)}</td>
          <td>{getNotesCountByCategory('Task', true)}</td>
        </tr>
        <tr>
          <td>Random Thought</td>
          <td>{getNotesCountByCategory('Random Thought', false)}</td>
          <td>{getNotesCountByCategory('Random Thought', true)}</td>
        </tr>
        <tr>
          <td>Idea</td>
          <td>{getNotesCountByCategory('Idea', false)}</td>
          <td>{getNotesCountByCategory('Idea', true)}</td>
        </tr>
        <tr>
          <td>Quote</td>
          <td>{getNotesCountByCategory('Quote', false)}</td>
          <td>{getNotesCountByCategory('Quote', true)}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default SummaryTable;
