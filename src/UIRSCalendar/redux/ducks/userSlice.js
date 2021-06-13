import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    status: -1,
    message: "",
    user: {}
  },
  reducers: {
    getUser() {},
    setStatus (state, action) {
      //const userData  = action.payload;
      const serverResponse  = action.payload;
      return {...state, status: serverResponse.statusCode, message: serverResponse.message}
  },
    setUser(state, action) {
        //const userData  = action.payload;
        const serverResponse  = action.payload;
        return {...state, status: serverResponse.statusCode, message: serverResponse.message, user: serverResponse.data}
    }
  }
});

export const { getUser, setUser, setStatus } = userSlice.actions;

export default userSlice.reducer;
