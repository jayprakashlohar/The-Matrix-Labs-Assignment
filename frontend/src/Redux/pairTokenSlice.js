import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  isError: false,
  isPairLoading: false,
  isPairError: false,
  isSideBarHidden: true,
  data: [],
  pairData: [],
};

const pairTokenslice = createSlice({
  name: "tokenPair",
  initialState: initialState,
  reducers: {
    getRequestToken: (state, { payload }) => {
      state.isLoading = true;
    },
    getRequestTokenSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.isError = false;
      state.data = payload;
    },
    getRequestTokenFailed: (state, { payload }) => {
      state.isLoading = false;
      state.isError = true;
    },
    getRequestPair: (state, { payload }) => {
      state.isPairLoading = true;
    },
    getRequestPairSuccess: (state, { payload }) => {
      state.isPairLoading = false;
      state.isPairError = false;
      state.pairData = payload;
    },
    getRequestPairFailed: (state, { payload }) => {
      state.isPairLoading = false;
      state.isPairError = true;
    },
    hideSidebar: (state, { payload }) => {
      state.isSideBarHidden = payload;
    },
    initializeCryptoData: (state, { payload }) => {
      state.data = [];
    },
    initializePairData: (state, { payload }) => {
      state.pairData = [];
    },
  },
});

export const {
  getRequestToken,
  getRequestTokenSuccess,
  getRequestTokenFailed,
  getRequestPair,
  getRequestPairSuccess,
  getRequestPairFailed,
  hideSidebar,
  initializeCryptoData,
  initializePairData,
} = pairTokenslice.actions;

export default pairTokenslice.reducer;
