import React from 'react';
import { connect } from 'react-redux';
import Task from './Task';

const ListTask = ({ tasks, filter }) => {
  const filteredTasks = filter === 'done' ?
    tasks.filter(task => task.isDone) :
    filter === 'not' ?
    tasks.filter(task => !task.isDone) :
    tasks;

  return (
    <div>
      {filteredTasks.map(task => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default ListTask;