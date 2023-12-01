import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    user:null
}

export const userslice = createSlice({
    name:"user",
    initialState,
    reducers:{
        setUser:(state,action) => {
            state.user = action.payload;
    },
    logout:(state,action) => {
        state.user = null;
    }
    }
})
export const {setUser,logout} = userslice.actions;

export const getUser = (state) => state.userInfo.user;

export default userslice.reducer;