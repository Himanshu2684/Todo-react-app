import { configureStore } from "@reduxjs/toolkit";
import ListSlice from "./slices/ListSlice";

export const store = configureStore({
    reducer:{
        list: ListSlice,
    }
})