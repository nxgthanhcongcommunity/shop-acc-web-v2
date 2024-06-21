import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { accountApi, authApi, masterDataApi } from "../../api";
import { LOCALSTORAGE_KEYS } from "../../constants";
import { JwtPayload, jwtDecode } from "jwt-decode";

interface IAccount {
    code: string
    email: string
}

interface IState {
    isLogged: boolean
    entity: IAccount | null
    loading: boolean
}

interface IDecoded extends JwtPayload {
    accountCode: string
    roles: string[]
}

export const GoogleLoginAsync = createAsyncThunk(
    "userSlice/GoogleLoginAsync",
    async (credential: any, thunkAPI) => {
        const response = await authApi.LoginWithGoogle(credential);
        if (response.succeed == false) return;

        const { token, refreshToken } = response.data;
        localStorage.setItem(LOCALSTORAGE_KEYS.ACCESS_TOKEN, token);
        localStorage.setItem(LOCALSTORAGE_KEYS.REFRESH_TOKEN, refreshToken);

        const { accountCode } = jwtDecode<IDecoded>(token);
        thunkAPI.dispatch(GetAccountByCode(accountCode));

        return true;
    }
);

export const GetAccountByCode = createAsyncThunk(
    "userSlice/GetAccountByCode",
    async (accountCode: string, { rejectWithValue }) => {
        const { succeed, data } = await accountApi.GetAccountByCode({ accountCode });
        if (!succeed) return;
        return data;
    }
);

const loadState = () => {
    try {
        const serializedState = localStorage.getItem(LOCALSTORAGE_KEYS.LOCAL_USER);
        if (serializedState == null) {
            return {
                entity: null,
                loading: true,
                isLogged: false,
            };
        }
        return JSON.parse(serializedState) as IState;
    } catch (err) {
        return {
            entity: null,
            loading: true,
            isLogged: false,
        };
    }
};

const saveState = (state: IState) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem(LOCALSTORAGE_KEYS.LOCAL_USER, serializedState);
    } catch (err) { }
};

const initialState: IState = loadState();

const userSlice = createSlice({
    name: "userSlice",
    initialState,
    reducers: {
        removeUserInfo: (state) => {
            state.entity = null;
            state.isLogged = false;
            state.loading = false;

            localStorage.removeItem(LOCALSTORAGE_KEYS.ACCESS_TOKEN);
            localStorage.removeItem(LOCALSTORAGE_KEYS.REFRESH_TOKEN);

            saveState(state);
        },
    },
    extraReducers: (builder) => {
        builder.addCase(GetAccountByCode.fulfilled, (state, action) => {
            state.loading = false;
            state.entity = action.payload;
            state.isLogged = true;
            saveState(state);
        });
    },
});

export const { removeUserInfo } = userSlice.actions;
export default userSlice.reducer;
