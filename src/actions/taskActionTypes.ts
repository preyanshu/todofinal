
export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const TOGGLE_TASK_DONE = 'TOGGLE_TASK_DONE'; 

export interface Task {
  id: number;
  text: string;
  isDone: boolean;
}

export interface AddTaskAction {
  type: typeof ADD_TASK;
  payload: Task;
}

export interface DeleteTaskAction {
  type: typeof DELETE_TASK;
  payload: number;
}

export interface ToggleTaskDoneAction { 
  type: typeof TOGGLE_TASK_DONE;
  payload: number; // Task ID
}

export type TaskActionTypes = AddTaskAction | DeleteTaskAction | ToggleTaskDoneAction; 