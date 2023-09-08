import {
  getRequestToken,
  getRequestTokenSuccess,
  getRequestTokenFailed,
} from "./pairTokenSlice";
import {
  getRequestPair,
  getRequestPairSuccess,
  getRequestPairFailed,
} from "./pairTokenSlice";
import axios from "axios";

export const getCryptoData = (url) => async (dispatch) => {
  try {
    dispatch(getRequestToken());
    const res = await axios.get(url);
    let data = res.data.pairs;
    const max10Pairs = data.slice(0, 10);
    max10Pairs.sort((a, b) => {
      const bprice = Number(b.priceUsd);
      const aprice = Number(a.priceUsd);
      return bprice - aprice;
    });
    data = null; 
    dispatch(getRequestTokenSuccess(max10Pairs));
  } catch (error) {
    dispatch(getRequestTokenFailed());
    console.log(error);
    throw error;
  }
};

export const getPairData = (url) => async (dispatch) => {
  try {
    dispatch(getRequestPair());
    const res = await axios.get(url);
    console.log(url);
    console.log("Response", res);
    console.log(res.data.pairs);
    let data = res.data.pairs;
    const max10Pairs = data.slice(0, 10);
    max10Pairs.sort((a, b) => {
      const bprice = Number(b.priceUsd);
      const aprice = Number(a.priceUsd);
      return bprice - aprice;
    });
    data = null; 
    // sort by descending order;
    dispatch(getRequestPairSuccess(max10Pairs));
  } catch (error) {
    dispatch(getRequestPairFailed());
    console.log(error);
    throw error;
  }
};
