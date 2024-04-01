import { ADD_TASK, DELETE_TASK, TOGGLE_TASK_DONE, TaskActionTypes, Task } from '../actions/taskActionTypes';

interface TaskState {
  tasks: Task[];
}

const initialState: TaskState = {
  tasks: localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')!) : [],
};

const taskReducer = (state = initialState, action: TaskActionTypes): TaskState => {
  switch (action.type) {
    case ADD_TASK:
      const newTask: Task = {
        ...action.payload,
        isDone: false, // Default isDone value when adding a new task
      };
      const updatedTasksAdd = [...state.tasks, newTask];
      localStorage.setItem('tasks', JSON.stringify(updatedTasksAdd)); // Save to local storage
      return {
        ...state,
        tasks: updatedTasksAdd,
      };
    case DELETE_TASK:
      const updatedTasksDelete = state.tasks.filter((task) => task.id !== action.payload);
      localStorage.setItem('tasks', JSON.stringify(updatedTasksDelete)); // Save to local storage
      return {
        ...state,
        tasks: updatedTasksDelete,
      };
    case TOGGLE_TASK_DONE:
      const updatedTasksToggle = state.tasks.map((task) =>
        task.id === action.payload ? { ...task, isDone: !task.isDone } : task
      );
      localStorage.setItem('tasks', JSON.stringify(updatedTasksToggle)); // Save to local storage
      return {
        ...state,
        tasks: updatedTasksToggle,
      };
    default:
      return state;
  }
};

export default taskReducer;
