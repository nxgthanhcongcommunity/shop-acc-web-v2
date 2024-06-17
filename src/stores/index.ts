import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import masterReducer from "./features/masterSlice";
import authReducer from "./features/authSlice";
import masterDataApi from "./services/master-data-api";

export const store = configureStore({
  devTools: true,
  reducer: {
    master: masterReducer,
    auth: authReducer,
    [masterDataApi.reducerPath]: masterDataApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(masterDataApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);
