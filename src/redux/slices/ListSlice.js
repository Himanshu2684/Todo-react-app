import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    array:[]
}

const ListSlice = createSlice({
    name:"list",
    initialState,
    reducers:{
        // add new task in array 
        add:(state,action)=>{
            state.array.push(action.payload)
            console.log(initialState)
        },
        // remove task from array
        remove:(state,action)=>{
            state.array = state.array.filter((item) => item !== action.payload);
            console.log(state.array)
        },
       
    }
})

export const {add, remove} = ListSlice.actions
export default ListSlice.reducer;