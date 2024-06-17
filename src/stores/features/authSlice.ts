import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface IAccount {
  id: number;
  role: string;
  familyName: string;
  givenName: string;
  email: string;
  photo: string;
  code: string;
}

export interface IAuthState {
  entity: IAccount | null;
  isLogged: boolean;
}

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("auth");
    if (serializedState == null) {
      return { entity: null } as IAuthState;
    }
    return JSON.parse(serializedState) as IAuthState;
  } catch (err) {
    return { entity: null } as IAuthState;
  }
};

const initialState: IAuthState = loadState();

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    assignAuthInfo: (state, action: PayloadAction<IAccount>) => {
      state.entity = action.payload;
      state.isLogged = true;
      saveState(state);
    },
    removeAuthInfo: (state) => {
      state.entity = null;
      state.isLogged = false;
      saveState(state);
    },
  },
});

const saveState = (state: IAuthState) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("auth", serializedState);
  } catch (err) {}
};

export const { assignAuthInfo, removeAuthInfo } = authSlice.actions;

export default authSlice.reducer;
