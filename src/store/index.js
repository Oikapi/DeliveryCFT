import { configureStore } from "@reduxjs/toolkit";
import packageTypesReducer from "./packageTypesSlice";
import pointsReducer from "./pointsSlice";
import selectedDataReducer from "./selectedDataSlice";


const store = configureStore({
    reducer:{
        packageTypes : packageTypesReducer,
        points : pointsReducer,
        selectedData : selectedDataReducer,
    }
})

export default store 