// DUCKS Pattern
import React from "react";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// createSlice is the main api fxn used to define redux logic
// PayloadAction is the type that reps the content of one given acton object

interface CounterState {
  value: number;
}
interface IncreseBy {
  her: number;
}

const initialState: CounterState = {
  value: 5,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    // Increment, Decrement, To Zero
    incremented(state: CounterState) {
      state.value++;
    },
    incrementByAmount(state: CounterState, action: PayloadAction<IncreseBy>) {
      state.value += action.payload.her;
    },
  },
});

export const { incremented, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
