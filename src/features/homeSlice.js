import { createSlice } from "@reduxjs/toolkit"

const homeSlice = createSlice({
name: "subject",
initialState: {
    subject: []
},
reducers: {
    addSubject: (state, action) => {
        state.subject = action.payload;
    },
    
    deleteSubject: (state, action) => {
        state.subject = action.payload;
    },
    updateSubject: (state, action) => {
        state.subject = action.payload;
    }
}
})

export default homeSlice.reducer;