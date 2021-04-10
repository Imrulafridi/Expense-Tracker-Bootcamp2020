const TransReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        trans: [action.payload, ...state.trans],
      };

    case "DELETE":
      return {
        ...state,
        trans: state.trans.filter(
          transaction => transaction.id !== action.payload
        ),
      };

    default:
      return state;
  }
};

export default TransReducer;
