import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userApi from "api/userApi";

const initialState = {
  id: "",
  isLogin: false,
  loadding: false,
  error: "",
};

export const userLogin = createAsyncThunk(
  "user/login",
  async (params, thunkAPI) => {
    const currentUser = await userApi.login(params);
    return currentUser;
  }
);

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(userLogin.pending, (state) => {
      state.loadding = true;
    }),
      // [userLogin.rejected]: (state) => {
      builder.addCase(userLogin.rejected, (state) => {
        state.loadding = false;
        state.error = "Login failed";
      }),
      builder.addCase(userLogin.fulfilled, (state, action) => {
        // [userLogin.fulfilled]: (state, action) => {
        state.loadding = false;
        state.isLogin = action.payload.isLogin;
        state.id = action.payload.id;
        // localStorage.setItem("access_token", action.payload.id);
        // alert("Logged in successfully!");
        // document.location.href = "/";
      });
  },
});

export default loginSlice.reducer;
