import { configureStore } from '@reduxjs/toolkit';
import personReducer from '../personSlice';

// the store object is used to show the stored data in our app screens

export const store = configureStore({
  reducer: {
    person: personReducer,
  },
});
