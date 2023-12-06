import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { UserState } from './UserState';
import { authCheck, authLogin, authLogout, authRegister } from './api';
import { RootState } from '../../../store';
import User, { LoginUserData, RegisterUserData } from '../types/User';

const initialState: UserState = {
  user: undefined,
  error: undefined,
};

export const register = createAsyncThunk(
  'user/register',
  (data: RegisterUserData) => {
    return authRegister(data);
  }
);
export const loginUser = createAsyncThunk('user/login', (data: LoginUserData) => {
  return authLogin(data);
});
export const logout = createAsyncThunk('user/logout', () => {
  return authLogout();
});
export const check = createAsyncThunk('user/check', () => {
  return authCheck();
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(register.fulfilled, (state, action) => {
      state.user = action.payload;
      state.error = undefined;
    });
    builder.addCase(register.rejected, (state, action) => {
      state.error = action.payload as string;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.user = action.payload;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.error = action.payload as string;
    });
    builder.addCase(logout.fulfilled, (state, action) => {
      state.user = undefined;
    });
    builder.addCase(logout.rejected, (state, action) => {
      state.error = action.payload as string;
    });
    builder.addCase(check.fulfilled, (state, action) => {
      state.user = action.payload;
    });
    builder.addCase(check.rejected, (state, action) => {
      state.error = action.payload as string;
    });
  },
});

export const selectUser = (state: RootState): User | undefined => {
  return state.user.user;
};

export default userSlice.reducer;
