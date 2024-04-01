
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { deleteTask,toggleTaskDone } from '../actions/taskActions';
import { ComboboxDropdownMenu } from "./Card"
import { toast } from 'react-toastify';

const TaskList: React.FC = () => {
  const tasks = useSelector((state: RootState) => state.tasks);
  const dispatch = useDispatch();

  const handleDeleteTask = (taskId: number) => {
    dispatch(deleteTask(taskId));
    toast.error('Task deleted successfully');
  };

  const handleToggleTaskDone = (taskId: number) => {
    dispatch(toggleTaskDone(taskId)); 
  };

  return (
    <div className='w-full h-1/2 flex items-center flex-col'>


      {tasks.length === 0 && <p className='text-white h-1/2 flex items-center justify-center'>No Tasks</p>}

      {tasks.length>0 && tasks.map((task:any) => (
        <ComboboxDropdownMenu key={task.id} task={task} deleteTask={handleDeleteTask} toggleTaskDone={handleToggleTaskDone}/>
        
      ))}
     
    </div>
  );
};

export default TaskList;
