import { createSlice } from "@reduxjs/toolkit";
const fecthStatusSlice=createSlice({
    name:'fetchStatus',
    initialState:{
         fetchDone:false,
         currentlyFetching:false,        
    },
    reducers:{
        markFetchDone:(state)=>
        {
            state.fetchDone=true;
        },
        markFetchingStarted:(state)=>
        {
             state.currentlyFetching=true;
        },
        markFetchingFinished:(state)=>
        {
         state.currentlyFetching=false;
        }
    }
})
export const fetchStatusAction=fecthStatusSlice.actions;
export default fecthStatusSlice;
