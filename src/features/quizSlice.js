import { createSlice } from "@reduxjs/toolkit";

const quizSlice = createSlice({
  initialState: {
    isLoading: false,
    quiz: [],
  },
  name: "quiz",
  reducers: {
    addQuiz: (state, action) => {
      state.isLoading = true;
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
    },
  },
});

export default quizSlice.reducer;