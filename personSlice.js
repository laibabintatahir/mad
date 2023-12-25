import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  /* initial  values here */
};

// here we are defining all functions to store the data in global storage
export const personSlice = createSlice({
  name: 'person',
  initialState,
  reducers: {
    addEmail: (state, action) => {
      return { ...state, email: action.payload };
    },
    addName: (state, action) => {
      return { ...state, uname: action.payload };
    },
    addAge: (state, action) => {
      return { ...state, age: action.payload };
    },
    addCity: (state, action) => {
      return { ...state, city: action.payload };
    },
  },
});

// Action creators are generated for each case reducer function
export const { addEmail, addName, addAge, addCity } = personSlice.actions;

export default personSlice.reducer;
