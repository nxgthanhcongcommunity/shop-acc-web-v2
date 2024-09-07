import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LOCALSTORAGE_KEYS } from "../../constants";

interface IState {
  code: string;
  email: string;
  familyName: string;
  givenName: string;
  photo: string;
  amount: number;
}

const loadState = () => {
  try {
    const serializedState = localStorage.getItem(LOCALSTORAGE_KEYS.LOCAL_USER);
    if (serializedState == null) {
      return null;
    }
    return JSON.parse(serializedState) as IState;
  } catch (err) {
    return null;
  }
};

const saveState = (state: IState) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(LOCALSTORAGE_KEYS.LOCAL_USER, serializedState);
  } catch (err) {}
};

const initialState: IState | null = loadState();

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    removeUser: (state) => {
      localStorage.removeItem(LOCALSTORAGE_KEYS.ACCESS_TOKEN);
      localStorage.removeItem(LOCALSTORAGE_KEYS.REFRESH_TOKEN);
      localStorage.removeItem(LOCALSTORAGE_KEYS.LOCAL_USER);
      return null;
    },
    addUser: (state, action: PayloadAction<IState>) => {
      saveState(action.payload);
      return action.payload;
    },
  },
});

export const { removeUser, addUser } = userSlice.actions;
export default userSlice.reducer;
