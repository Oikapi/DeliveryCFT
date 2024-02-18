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
          },
        receiver: {
            firstname: "",
            lastname: "",
            middlename: "",
            phone: ""
          },
        sender : {
          firstname: "",
            lastname: "",
            middlename: "",
            phone: ""
        },
        receiverAddress: {
          street: "",
          house: "",
          appartament: "",
          comment: ""
        },
        senderAddress: {
          street: "",
          house: "",
          appartament: "",
          comment: ""
        },
        payer: ""
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
      changeReciever: (state,action) => {
        console.log(action.payload)
        state.receiver = action.payload
      },
      changeSender: (state,action) => {
        console.log(action.payload)
        state.sender = action.payload
      },
      changeReceiverAddress: (state,action) => {
        state.receiverAddress = action.payload
      },
      changeSenderAddress : (state,action) =>{
        state.senderAddress = action.payload
      },
      changePayer : (state,action) => {
        state.payer = action.payload
      }
    }
})

export default selectedDataSlice.reducer
export const {changeReceiverPoint,changeSenderPoint,changePackageField,changePackageAll,changeReciever,changeSender,changeReceiverAddress,changePayer,changeSenderAddress} = selectedDataSlice.actions