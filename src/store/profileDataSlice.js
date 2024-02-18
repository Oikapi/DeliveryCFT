import { createSlice } from "@reduxjs/toolkit";


const profileDataSlice = createSlice({
    name:"profileData",
    initialState:{
        phone:"",
        token:"",
        retryDelay : 0,
    },
    reducers:{
        changePhone:(state,action)=>{
             state.phone = action.payload
        },
        setRetryDelay: (state,action) => {
            state.retryDelay = action.payload;
        }
    }
})


export const {changePhone,setRetryDelay} = profileDataSlice.actions
export default profileDataSlice.reducer

