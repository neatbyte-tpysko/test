import axios from "axios";

export const fetchEUR = () => (dispatch) => {
  dispatch(isLoding(false));
  axios
    .get(`https://api.exchangerate.host/convert?from=EUR&to=UAH`)
    .then(({ data }) => {
      dispatch(setEUR(data.result));
      dispatch(isLoding(true));
    })
    .catch(function (error) {
      console.log("Show error notification!");
      return Promise.reject(error);
    });
};
export const fetchUSD = () => (dispatch) => {
  dispatch(isLoding(false));
  axios
    .get(`https://api.exchangerate.host/convert?from=USD&to=UAH`)
    .then(({ data }) => {
      dispatch(setUSD(data.result));
      dispatch(isLoding(true));
    })
    .catch(function (error) {
      console.log("Show error notification!");
      return Promise.reject(error);
    });
};
export const fetchPLN = () => (dispatch) => {
  dispatch(isLoding(false));
  axios
    .get(`https://api.exchangerate.host/convert?from=PLN&to=UAH`)
    .then(({ data }) => {
      dispatch(setPLN(data.result));
      dispatch(isLoding(true));
    })
    .catch(function (error) {
      console.log("Show error notification!");
      return Promise.reject(error);
    });
};

export const setEUR = (payload) => ({
  type: "SET_EUR",
  payload,
});
export const setPLN = (payload) => ({
  type: "SET_PLN",
  payload,
});
export const setUSD = (payload) => ({
  type: "SET_USD",
  payload,
});
export const isLoding = (payload) => ({
  type: "LOADING",
  payload,
});
