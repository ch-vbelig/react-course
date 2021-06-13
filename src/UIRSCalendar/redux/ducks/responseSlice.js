import { createSlice } from "@reduxjs/toolkit"

const responseSlice = createSlice({
    name: "Response",
    initialState: {
        status: -1,
        message: ""
    },

    resucers: {
        setStatus: (state, action) =>  {
            const {status} = action.payload
            return {...state, status: status}
        },
        setMessage: (state, action) => {
            const {message} = action.payload
            return {...state, message: message}
        }
    }
});


export const { setStatus, setMessage } = responseSlice.actions;

export default responseSlice.reducer;
