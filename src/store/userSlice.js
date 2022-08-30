import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { client } from "../constants/axios";
import { loginService } from "../services/userServices";

const initialState = {
    user: {},
    loading: false,
    isAuth: false,
    message: '',
    error: ''
}

export const loginAsync = createAsyncThunk(
    'user/loginAsync',
    async (data) => {
        const res = await loginService(data);

        if(res.status) {
            client.defaults.headers.common.Authorization = 'Bearer ' + res.data.jwt;
            localStorage.setItem('user', JSON.stringify(res.data.user));
            localStorage.setItem('token', res.data.jwt);
        }
        return res;
    }
)

export const logoutAsync = createAsyncThunk(
    'user/logoutAsync',
    () => {
        client.defaults.headers.common.Authorization = null;
        localStorage.removeItem('user');
        localStorage.removeItem('token');
    }
)

export const controlAsync = createAsyncThunk(
    'user/controlAsync',
    async () => {
        const userInfo = localStorage.getItem('user');
        const tokenInfo = localStorage.getItem('token');

        if(userInfo || tokenInfo) {
            client.defaults.headers.common.Authorization = 'Bearer ' + tokenInfo;
            
            return {
                status: true,
                data: {
                    user: JSON.parse(userInfo),
                    jwt: tokenInfo
                }
            }
        }
        else {
            return {
                status: false,
            }
        }

    }
)

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(loginAsync.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(loginAsync.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload.data.user;
                state.isAuth = true;
            });

        builder
            .addCase(logoutAsync.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(logoutAsync.fulfilled, (state, action) => {
                state.loading = false;
                state.isAuth = false;
                state.user = {};
            });

        builder
            .addCase(controlAsync.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(controlAsync.fulfilled, (state, action) => {
                state.loading = false;
                console.log(action.payload)
                state.user = action.payload.data.user;
                state.isAuth = true;
            });

            

    }
});

export default userSlice.reducer;