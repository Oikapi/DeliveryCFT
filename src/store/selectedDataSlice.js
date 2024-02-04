import { createSlice } from "@reduxjs/toolkit";



const selectedDataSlice = createSlice({
    name : "selectedData",
    initialState:{
        package: {
          id : 0,
          name: "",
          length:0  ,
          width: 0,
          weight:0 ,
          height: 0,
          },
        senderPoint: {
          id:0,
          latitude: 0,
          longitude: 0
          },
        receiverPoint: {
          id:0,
          latitude: 0,
          longitude:0
          }
    },
    reducers:{
      changePackageAll:(state,action) => {
        console.log(action.payload)
        state.package = {...action.payload}
      },
      changePackageField:(state,action) => {
        console.log(action.payload)
        state.package = {...state.package, ...action.payload,name : "Свой размер"}
      },
      changeSenderPoint:(state,action) => {
        state.senderPoint = action.payload
      },
      changeReceiverPoint:(state,action) => {
        console.log(state,action)
        state.receiverPoint = action.payload
      },
    }
})

export default selectedDataSlice.reducer
export const {changeReceiverPoint,changeSenderPoint,changePackageField,changePackageAll} = selectedDataSlice.actions