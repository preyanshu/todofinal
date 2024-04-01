
import React from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import { ToastContainer } from 'react-toastify';

const App: React.FC = () => {
  return (
    <div className="App dark">
      {/* <h1 className='text-white'>React To-Do App with Redux</h1> */}
      <TaskInput />
      <TaskList />
      <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"

/>
    </div>
  );
};

export default App;
