// vitals
import React from 'react';

// components, mocks
import TaskItem from '../../components/TaskItem';
import tasksResponse from './mock/tasksResponseMock';

// styles
import TaskStyled from './styles';

function Tasks() {
  return (
    <TaskStyled>
      <section className="example">
        <TaskItem
          tasks={ tasksResponse.tasks !== null
            ? tasksResponse.tasks : [] }
        />
      </section>
    </TaskStyled>
  );
}

export default Tasks;
