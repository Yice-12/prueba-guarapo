import { configureStore } from "@reduxjs/toolkit";
import { charactersSlice } from "./slices/charactersSlice/charactersSlice";
import { useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    characters: charactersSlice.reducer,
  },
});

// useDispatch for typescript
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

// useSelector for typescript
export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector = useSelector.withTypes<RootState>();
