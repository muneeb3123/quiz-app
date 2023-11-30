import { createSlice } from "@reduxjs/toolkit"

const optionSlice = createSlice({
name: "subject",
initialState: {
    option: []
},
reducers: {
    addOption: (state, action) => {
        state.option = action.payload;
    },
    
    deleteOption: (state, action) => {
        state.option = action.payload;
    },
    updateOption: (state, action) => {
        state.option = action.payload;
    },
    getOption: (state, action) => {
        state.option = action.payload;
    },
}
})

export default optionSlice.reducer;