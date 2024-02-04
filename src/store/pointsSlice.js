import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchPoints = createAsyncThunk(
    "poins/fetchPoints",
    async () => {
        const response = await fetch("https://shift-backend.onrender.com/delivery/points")
        const data = await response.json()
        return data.points
    }

)

const pointSlice = createSlice(
    {
        name:"poins",
        initialState :{
            points :[],
            status : null,
            error:null,
        },
        extraReducers:(builder)=>{
            builder
            .addCase(fetchPoints.pending,(state,action) => {
                state.status = "loading",
                state.error = null,
                state.points = []
            })
            .addCase(fetchPoints.fulfilled,(state,action) => {
                state.status = "resolved",
                state.points = action.payload
            })
            
        }
}
)

export default pointSlice.reducer