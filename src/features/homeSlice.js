import { createSlice } from "@reduxjs/toolkit"

const homeSlice = createSlice({
name: "subject",
initialState: {
    subject: [],
    isLoading: false,
},
reducers: {
    addSubject: (state, action) => {
        state.subject = action.payload;
        state.isLoading = false;
    },
    
    deleteSubject: (state, action) => {
        state.subject = action.payload;
        state.isLoading = true;
    },
    updateSubject: (state, action) => {
        state.subject = action.payload;
        state.isLoading = true;
    },
    getSubject: (state, action) => {
        state.subject = action.payload;
        state.isLoading = false;

    },
}
})

export default homeSlice.reducer;