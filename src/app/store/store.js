import { configureStore } from '@reduxjs/toolkit';
import userInfo from './userSlice';

const store = configureStore({
  reducer: {
    counter: userInfo,
    // Add other reducers here if needed
  },
});

export default store;
