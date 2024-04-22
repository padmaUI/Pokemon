import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  isError: false,
  errorMessage: ""
};

const uiStateSlice = createSlice({
  name: 'ui-state',
  initialState: initialState,
  reducers: {
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },

    setIsError(state, action) {
      state.isError = action.payload != "";
      state.errorMessage = action.payload;
    },
  },
});


export const uiStateActions = uiStateSlice.actions;

export default uiStateSlice;