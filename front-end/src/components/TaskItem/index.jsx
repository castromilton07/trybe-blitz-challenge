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

const statusTypes = [
  'Pendente',
  'Em Andamento',
  'Pronto',
];

function TaskItem({
  tasks,
  status,
  setStatus,
  deleteTask,
  updateTask,
  deleteAllTasks }) {
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
            ? (tasks.map((task, taskIndex) => (
              <tr className="row-body" key={ taskIndex }>
                <td
                  className="column-item"
                >
                  { taskIndex + 1 }
                </td>
                <td
                  className="column-title"
                >
                  { task.title }
                </td>
                <td
                  className="column-status"
                >
                  <select
                    name="status"
                    id="status"
                    className="user-input"
                    value={ status[taskIndex] }
                    onChange={ (e) => setStatus((previousStatus) => [
                      ...previousStatus.slice(0, taskIndex),
                      e.target.value,
                      ...previousStatus.slice(taskIndex + 1),
                    ]) }
                  >
                    { statusTypes.map((statusType, statusIndex) => (
                      <option
                        value={ statusType }
                        key={ statusIndex }
                      >
                        {statusType}
                      </option>
                    ))}
                  </select>
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
                    onClick={ (e) => updateTask(e, task.title, taskIndex) }
                  >
                    Modify
                  </button>
                </td>
                <td className="column-remove-button">
                  <button
                    type="button"
                    name="remove"
                    value={ task.id }
                    onClick={ (e) => deleteTask(e) }
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
  status: PropTypes.arrayOf(PropTypes.string).isRequired,
  setStatus: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
  updateTask: PropTypes.func.isRequired,
  deleteAllTasks: PropTypes.func.isRequired,
};

export default TaskItem;
