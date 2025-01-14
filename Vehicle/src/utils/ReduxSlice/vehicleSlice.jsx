import { createSlice } from "@reduxjs/toolkit";

const vehicleSlice = createSlice({
  name: "vehicles",
  initialState: {
    items: [],
  },
  reducers: {
    addVehicle: (state, action) => {
      state.items.push(action.payload);
    },
  },
});

export const { addVehicle } = vehicleSlice.actions;
export default vehicleSlice.reducer;
