import pairTokenReducer from "./pairTokenSlice";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

export const store = configureStore({
  reducer: { pairTokenReducer },
  middleware: [thunk],
});
