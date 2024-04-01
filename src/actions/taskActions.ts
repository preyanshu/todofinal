import { ADD_TASK, DELETE_TASK, TaskActionTypes, Task, TOGGLE_TASK_DONE } from './taskActionTypes';

export const addTask = (task: Task): TaskActionTypes => ({
  type: ADD_TASK,
  payload: task,
});

export const deleteTask = (taskId: number): TaskActionTypes => ({
  type: DELETE_TASK,
  payload: taskId,
});

export const toggleTaskDone = (taskId: number) => ({
  type: TOGGLE_TASK_DONE,
  payload: taskId,
});
