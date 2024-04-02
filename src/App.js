import './App.css';
import TaskInput from './components/TaskInput';
import TaskAdd from './components/TaskList';
import { useState } from 'react';


function App() {
  // Take value from input tag
  const [getInput, setGetInput] = useState('');

  // set setGetInput === input
  function input(value){
    console.log(value)
    setGetInput(value)
  }

  return (
    <div className="w-full h-screen py-20 flex flex-col gap-14 justify-center items-center bg-slate-950">
      <TaskInput getvalue={input}/>
      <TaskAdd getInput={getInput}/>
    </div>
  );
}

export default App;
