import actionTypes from '../actions/actionTypes';

const initialState = {
  groceries: [],
  isLoading: false
};

const groceryReducer = (state = initialState, action) => {
  switch (action.type) {
  case actionTypes.LOAD_GROCERIES_SUCCESS:
    return {
      ...state,
      groceries: action.groceryData
    };
  case actionTypes.ADD_GROCERY_SUCCESS:
    return {
      ...state,
      groceries: [...state.groceries, action.grocery]
    };
  case actionTypes.DELETE_GROCERY_SUCCESS:
    return {
      ...state,
      groceries: [
        ...state.groceries.filter(grocery => grocery._id !== action.id)
      ]
    };
  case actionTypes.PURCHASE_GROCERY_SUCCESS:
    return {
      groceries: state.groceries.map(grocery => {
        if (grocery._id === action.id) {
          const { purchased } = grocery;
          return { ...grocery, purchased: !purchased };
        }
        return grocery;
      })
    };
  case actionTypes.IS_LOADING:
    return {
      ...state,
      isLoading: action.bool
    };
  default:
    return state;
  }
};

export default groceryReducer;
