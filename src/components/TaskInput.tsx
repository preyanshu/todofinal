import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../actions/taskActions';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const TaskInput: React.FC = () => {
  const [task, setTask] = useState<string>('');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (task.trim() !== '') {
     
      const newTask = {
        id: Date.now(), 
        text: task,
        isDone: false 
      };
      dispatch(addTask(newTask) as any);
      setTask('');
      toast.success('Task added successfully');
    }
  };
 

  return (
    <div className='flex w-full h-40 items-end justify-center mb-5'>
      <div className="flex w-full max-w-sm items-center space-x-2 p-5">
        <Input className="text-white" type="text" placeholder="Task" value={task} onChange={(e) => setTask(e.target.value)}/>
        <Button type="button" onClick={handleAddTask}>Add</Button> {/* Make sure to specify type="button" */}
      </div>

    
    </div>
  );
};

export default TaskInput;
