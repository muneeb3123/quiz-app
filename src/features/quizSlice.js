import { createSlice } from "@reduxjs/toolkit";

const quizSlice = createSlice({
  initialState: {
    isLoading: false,
    quiz: [],
  },
  name: "quiz",
  reducers: {
    addQuiz: (state, action) => {
      state.quiz = action.payload;
    },
    deleteQuiz: (state, action) => {
      state.quiz = action.payload;
    },
    updateQuiz: (state, action) => {
      state.quiz = action.payload;
    },
    getQuiz: (state, action) => {
      state.quiz = action.payload;
      state.isLoading = false;
    },
  },
});

export default quizSlice.reducer;