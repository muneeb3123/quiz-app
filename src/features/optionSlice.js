import { createSlice } from "@reduxjs/toolkit"

const optionSlice = createSlice({
name: "subject",
initialState: {
    option: [],
    isLoading: false,
},
reducers: {
    addOption: (state, action) => {
        state.option = action.payload;
        state.isLoading = false;
    },
    
    deleteOption: (state, action) => {
        state.option = action.payload;
    },
    updateOption: (state, action) => {
        state.option = action.payload;
        state.isLoading = false;

    },
    getOption: (state, action) => {
        state.option = action.payload;

    },
}
})

export default optionSlice.reducer;