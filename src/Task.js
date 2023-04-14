import React from 'react';
import { connect } from 'react-redux';
import { toggleTask, deleteTask, editTask } from '../actions/taskActions';

const Task = ({ task, toggleTask, deleteTask, editTask }) => {
  const { id, description, isDone } = task;
  const [editMode, setEditMode] = React.useState(false);
  const [editedDescription, setEditedDescription] = React.useState(description);

  const handleToggle = () => {
    toggleTask(id);
  };

  const handleDelete = () => {
    deleteTask(id);
  };

  const handleEdit = () => {
    if (editMode) {
      editTask(id, editedDescription);
    }
    setEditMode(!editMode);
  };

  const handleDescriptionChange = (e) => {
    setEditedDescription(e.target.value);
  };

  return (
    <div>
      {editMode ? (
        <input
          type="text"
          value={editedDescription}
          onChange={handleDescriptionChange}
        />
      ) : (
        <p>{description}</p>
      )}
      <input
        type="checkbox"
        checked={isDone}
        onChange={handleToggle}
      />
      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleEdit}>{editMode ? 'Save' : 'Edit'}</button>
    </div>
  );
};

// Map dispatch actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    toggleTask: (taskId) => dispatch(toggleTask(taskId)),
    deleteTask: (taskId) => dispatch(deleteTask(taskId)),
    editTask: (taskId, description) => dispatch(editTask(taskId, description)),
  };
};

export default connect(null, mapDispatchToProps)(Task);
