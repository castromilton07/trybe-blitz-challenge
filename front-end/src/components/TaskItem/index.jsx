// vitals
import React from 'react';
import PropTypes from 'prop-types';

// styles
import TaskItemStyled from './styles';

// constants
const tableColumns = [
  'Item',
  'Title',
  'Status',
  'Updated',
  'Modify',
  'Remove',
];

function TaskItem({ tasks }) {
  return (
    <TaskItemStyled>
      <span className="example">Lista de Tarefas</span>
      <table cellSpacing="0" cellPadding="0">
        <thead>
          <tr className="row-header">
            { tableColumns.map((column, index) => (
              <th
                key={ index }
              >
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          { tasks.length
            ? (tasks.map((task, index) => (
              <tr className="row-body" key={ task.id }>
                <td
                  className="column-item"
                >
                  { index + 1 }
                </td>
                <td
                  className="column-title"
                >
                  { task.title }
                </td>
                <td
                  className="column-status"
                >
                  { task.status }
                </td>
                <td
                  className="column-updated"
                >
                  { task.updated }
                </td>
                <td className="column-modify-button">
                  <button
                    type="button"
                    name="modify"
                    value={ task.id }
                    onClick={ () => console.log('modify') }
                  >
                    Modify
                  </button>
                </td>
                <td className="column-remove-button">
                  <button
                    type="button"
                    name="remove"
                    value={ task.id }
                    onClick={ () => console.log('remove') }
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))) : <> </> }
        </tbody>
      </table>
    </TaskItemStyled>
  );
}

TaskItem.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default TaskItem;
