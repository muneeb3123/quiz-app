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
        state.isLoading = true;
    },
    
    deleteSubject: (state, action) => {
        state.subject = action.payload;
        
    },
   
    getSubject: (state, action) => {
        state.subject = action.payload;
        state.isLoading = true;

    },
}
})

export default homeSlice.reducer;