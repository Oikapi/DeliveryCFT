import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchPackagesTypes = createAsyncThunk(
    "delivery/fetchPackagesTypes",
    async () => {
        const response = await fetch("https://shift-backend.onrender.com/delivery/package/types")
        const data = await response.json()
        return data.packages
    }
)
const packageTypesSlice = createSlice({
    name:"packageTypes",
    initialState:{
        packageTypes:[
        ],
        status:null,
        error:null
    },
    reducers:{
        LoadFromServer : (state,action) => {
            state.packageTypes.push(action.payload.packageTypes.packageTypes)
        }   
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchPackagesTypes.pending, (state, action) => 
        {state.status = "loading",
        state.error = null})
        .addCase(fetchPackagesTypes.fulfilled, (state, action) => 
        {state.status = "resolved",
        state.packageTypes =action.payload})
    
      },
})


export const {LoadFromServer} = packageTypesSlice.actions

export default packageTypesSlice.reducer 