const initialState = {
  loading: true,
  pln: 0,
  eur: 0,
  usd: 0,
};

const shopReduser = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PLN": {
      return { ...state, pln: action.payload };
    }
    case "SET_EUR": {
      return { ...state, eur: action.payload };
    }
    case "SET_USD": {
      return { ...state, usd: action.payload };
    }
    case "LOADING": {
      return {
        ...state,
        loading: action.payload,
      };
    }

    default:
      return state;
  }
};

export default shopReduser;
