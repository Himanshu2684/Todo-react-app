import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { add } from '../redux/slices/ListSlice'
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";




const TaskInput = ({getvalue}) => {
    // Take input value from input tag
    const [inputValue, setInputValue] = useState('')
    const dispatch = useDispatch()
    function changeHandler(e){
        // Set input value
        setInputValue(e.target.value)
    }
    const KeyUp = (e) =>{
        // Press ENTER add todo in todos list
        if(e.key === 'Enter'){
            submitHandler()
        }
    }
    function submitHandler(){
        // if input tag value === NULL ------> Alert(Please enter task)
        if(inputValue === ''){
            return alert("Please Enter Task...")
        }
        getvalue(inputValue)
        setInputValue("")
        dispatch(add(inputValue))
        toast.success("Success Added !");
        

    }

  return (
    <div className='w-2/5 flex justify-between gap-4'>
      <input className='w-full h-full outline-none py-3 px-6 flex justify-center items-center border rounded-xl border-purple-500 text-slate-400 bg-slate-950 text-[15px] font-semibold'
      type='text' placeholder='✍️ Enter a new task here...' value={inputValue} 
      onChange={changeHandler} onKeyUp={KeyUp}
      />
      <button className='flex justify-center pt-1 bg-purple-700 px-4 text-white rounded-xl text-3xl'
        onClick={submitHandler} 
      >
        +
      </button>
      <ToastContainer
      autoClose = {2000}
       />
    </div>
  )
}

export default TaskInput
