import React, { useState } from 'react';
import Task from './Task.js';
import ListTask from './Listtask.js';
import AddTask from './Addtask.js';

const App = () => {

  const [tasks, setTasks] = useState([]);

  const handleAddTask = (description) => {
  
  };

  const handleToggleTask = (taskId) => {
  };

  return (
    <div>
      <AddTask onAdd={handleAddTask} />
      <ListTask tasks={tasks} filter="all" onToggle={handleToggleTask} />
      {/* You can use different filter values ('done' or 'not') for filtering tasks */}
    </div>
  );
};

export default App;
