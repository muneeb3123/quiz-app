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
    },
    
    deleteOption: (state, action) => {
        state.option = action.payload;
        state.isLoading = true;
    },
    updateOption: (state, action) => {
        state.option = action.payload;
        state.isLoading = true;

    },
    getOption: (state, action) => {
        state.option = action.payload;

    },
}
})

export default optionSlice.reducer;