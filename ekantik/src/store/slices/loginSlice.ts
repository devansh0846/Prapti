import {createSlice} from '@reduxjs/toolkit';

const initialLoginState = {
    isLoggedIn: false,
    email: '',
    passWord: '',
  };
  
  const loginSlice = createSlice({
    name: 'login',
    initialState: initialLoginState,
    reducers: {
      setEmail(state, action) {
        state.email = action.payload;
      },
      setPassword(state, action) {
        state.passWord = action.payload;
      },
      login(state) {
        state.isLoggedIn = true;
      },
      logout(state) {
        state.isLoggedIn = false;
        state.email = '';
        state.passWord = '';
      },
    },
  });

  export const loginActions = loginSlice.actions;
  export default loginSlice;
  