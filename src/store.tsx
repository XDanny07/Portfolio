import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./Components/reducers";

const store = configureStore({ reducer: rootReducer });

export default store;
