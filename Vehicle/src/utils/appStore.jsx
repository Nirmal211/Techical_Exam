import { configureStore } from "@reduxjs/toolkit";
import vehicleReducer from "./ReduxSlice/vehicleSlice";
const appStore = configureStore({
  reducer: {
    vehicles: vehicleReducer,
  },
});

export default appStore;
