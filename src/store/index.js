import { configureStore } from "@reduxjs/toolkit";
import packageTypesReducer from "./packageTypesSlice";
import pointsReducer from "./pointsSlice";
import selectedDataReducer from "./selectedDataSlice";
import profileDataReducer from "./profileDataSlice";


const store = configureStore({
    reducer:{
        packageTypes : packageTypesReducer,
        points : pointsReducer,
        selectedData : selectedDataReducer,
        profileData:profileDataReducer,
    }
})

export default store 