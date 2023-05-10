import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api.js";
import Cookies from "js-cookie";

export const login = createAsyncThunk(
  "user/login",
  async ({ formValue, navigate, toast }, { rejectWithValue }) => {
    try {
      const response = await api.loginUser(formValue);
      toast.success("Login Successfully");
      navigate("/");
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const register = createAsyncThunk(
  "user/register",
  async ({ formValue, navigate, toast }, { rejectWithValue }) => {
    try {
      const response = await api.registerUser(formValue);
      toast.success("Register Successfully");
      navigate("/");
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const userSlice = createSlice({
  name: "userAuth",
  initialState: {
    user: null,
    error: "",
    loading: false,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setLogout: (state, action) => {
      Cookies.remove("token");
      state.user = null;
    },
  },
  extraReducers: {
    [login.pending]: (state, action) => {
      state.loading = true;
    },
    [login.fulfilled]: (state, action) => {
      state.loading = false;
      Cookies.set("token", JSON.stringify({ ...action.payload.token }), {
        // set the 'profile' cookie
        // expires: 1, // cookie will expire in 30 days
        path: "/", // cookie will be available in all paths
        // sameSite: 'strict', // cookie will only be sent in a first-party context
      });
      state.user = action.payload.result;
    },
    [login.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [register.pending]: (state, action) => {
      state.loading = true;
    },
    [register.fulfilled]: (state, action) => {
      state.loading = false;
      Cookies.set("token", JSON.stringify({ ...action.payload.token }), {
        // set the 'profile' cookie
        // expires: 1, // cookie will expire in 30 days
        path: "/", // cookie will be available in all paths
        // sameSite: 'strict', // cookie will only be sent in a first-party context
      });
      state.user = action.payload.result;
    },
    [register.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});

export const { setUser, setLogout } = userSlice.actions;

export default userSlice.reducer;