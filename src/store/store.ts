import { configureStore } from '@reduxjs/toolkit';

// Define a reducer as an example. This could be replaced or expanded based on actual app needs.
const rootReducer = {};

export const store = configureStore({
  reducer: rootReducer,
});

// Optionally export the RootState type for use throughout your application
export type RootState = ReturnType<typeof store.getState>;

// Export the AppDispatch type for use with useDispatch
export type AppDispatch = typeof store.dispatch;