// vitals
import React, { useState, useEffect } from 'react';

// components, mocks
import api from '../../api';
import order from '../../services';
import TaskItem from '../../components/TaskItem';
// import tasksResponse from './mock/tasksResponseMock';

// styles
import TaskStyled from './styles';

function Tasks() {
  const [tasksResponse, setTasksResponse] = useState([]);
  const [deletedOrUpdated, setDeletedOrUpdated] = useState(false);
  const [status, setStatus] = useState([]);

  const getTasks = async () => api.get('/tasks')
    .then((response) => response.data)
    .catch((error) => console.log(error.response.status));

  const deleteTask = async ({ target }) => {
    api.delete(`/tasks/${target.value}`)
      .catch((error) => console.log(error.response.status));
    setDeletedOrUpdated(true);
  };

  const updateTask = async ({ target }, title, index) => {
    api.put(`/tasks/${target.value}`, { title, status: status[index] })
      .catch((error) => console.log(error.response.status));
    setDeletedOrUpdated(true);
  };

  const deleteAllTasks = async () => {
    api.delete('/tasks/clear')
      .catch((error) => console.log(error.response.status));
    setDeletedOrUpdated(true);
  };

  const adjustTaskData = (tasks) => {
    const adjustedTasks = [];
    tasks.forEach((task) => {
      const { _id: id } = task;
      adjustedTasks.push({
        id,
        title: task.title,
        status: task.status,
        updated: task.updated,
      });
    });
    return adjustedTasks;
  };

  useEffect(() => {
    const getTasksList = async () => {
      const getAllTasks = await getTasks();
      const adjustedTasksData = adjustTaskData(getAllTasks);
      setTasksResponse(adjustedTasksData);
      setStatus([]);
      setDeletedOrUpdated(false);
    };
    getTasksList();
  }, [deletedOrUpdated]);

  useEffect(() => {
    tasksResponse.forEach((task) => {
      setStatus((previousStatus) => [...previousStatus, task.status]);
    });
  }, [tasksResponse]);

  return (
    <TaskStyled>
      <section className="example">
        <TaskItem
          tasks={ tasksResponse !== null
            ? tasksResponse : [] }
          status={ status }
          setStatus={ setStatus }
          deleteTask={ deleteTask }
          updateTask={ updateTask }
          deleteAllTasks={ deleteAllTasks }
        />
      </section>
    </TaskStyled>
  );
}

export default Tasks;
