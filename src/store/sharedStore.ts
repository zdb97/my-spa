import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice";

// Create a function to initialize the store
export const initStore = () => {
  return configureStore({
    reducer: {
      app: appReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: true,
        immutableCheck: true,
      }),
  });
};

// Initialize and export the store
export const store = initStore();

// Export types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
