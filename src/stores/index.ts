import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import masterReducer from "./features/masterSlice";
import appReducer from "./features/appSlice";
import masterDataApi from "./services/master-data-api";
import userReducer from "./features/userSlice";

export const store = configureStore({
  devTools: true,
  reducer: {
    master: masterReducer,
    user: userReducer,
    app: appReducer,
    [masterDataApi.reducerPath]: masterDataApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(masterDataApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);
