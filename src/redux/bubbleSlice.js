import { createSlice } from "@reduxjs/toolkit";

const initialState={
    array:[],
    iteration:0,
    time:0,
}

export const bubbleSlice=createSlice({
    name:'bubble',
    initialState,
    reducers:{
        setInputArray: (state,action)=>{
               state.array=action.payload;
        },
        setIteration:(state,action)=>{
            state.iteration=action.payload;
        }
    }
})
export const {setInputArray,setIteration}=bubbleSlice.actions
export default bubbleSlice.reducer