import { createStore } from 'redux';

// Define initial state
const initialState = {
  tasks: [],
};

// Define reducer
const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case 'TOGGLE_TASK':
      return {
        ...state,
        tasks: state.tasks.map(task => {
          if (task.id === action.payload) {
            return { ...task, isDone: !task.isDone };
          } else {
            return task;
          }
        }),
      };
    case 'DELETE_TASK':
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload),
      };
    case 'EDIT_TASK':
      return {
        ...state,
        tasks: state.tasks.map(task => {
          if (task.id === action.payload.id) {
            return { ...task, description: action.payload.description };
          } else {
            return task;
          }
        }),
      };
    default:
      return state;
  }
};

// Create Redux store
const store = createStore(taskReducer);

export default store;
