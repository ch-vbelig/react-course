import { createSlice } from "@reduxjs/toolkit";

const loginDataSlice = createSlice({
  name: "loginData",
  initialState: {
      login: "",
      password: ""
  },

  reducers: {
    setLogin: (state, action) => {
      const credentials = action.payload
      return {...state, login: credentials.login}
    },
    setPassword: (state, action) => {
      const credentials = action.payload
      return {...state, password: credentials.password}
    }
  }
});

export const { setLogin, setPassword } = loginDataSlice.actions;

export default loginDataSlice.reducer;