import React from 'react'
import completeIcon from '../assets/right.png'
import deleteIcon from '../assets/delete.png'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../redux/slices/ListSlice'


const TaskAdd = () => {
    // find the length of todos list 
    const count = useSelector((state) => state.list.array.length)
    // Get the list of todos
    const list = useSelector((state) => state.list.array)
    const dispatch = useDispatch()

  return (
    <div className='w-1/2  rounded-2xl py-8 px-10  pl-16 text-white gap-3 flex flex-col 
    overflow-x-hidden scroll-m-0'>

      <h2 className='pl-1'>Tasks to do - {count}</h2>

      <div className='w-full gap-3  flex flex-col overflow-scroll overflow-x-hidden px-2'>
        {
          // Mapping for all todo and return 
            list.map((id,idx)=>{
                return(
                    <div className ={`flex gap-5 key=${idx}`}>

                        <div className='w-[28rem]  px-4 py-3   rounded-xl bg-purple-900/40 text-slate-400'>
                            <p className=' '>{id}</p>
                        </div>
                        
                        {/* Calling dispatch(remove) && (complete) by sending ID */}
                        <div className=' flex justify-center gap-[2rem] items-center '> 
                            <img src={completeIcon} alt='img' className='w-[30px] cursor-pointer'
                            onClick={ ()=> dispatch(remove(id))}
                            />
                            <img src={deleteIcon} alt='img' className='w-[30px] cursor-pointer' 
                            onClick={ ()=> dispatch(remove(id))}
                            />
                        </div>

                    </div>
                )
            })
        }
        
      </div>
    </div>
  )
}

export default TaskAdd
