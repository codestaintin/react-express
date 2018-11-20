import groceryReducer from '../../reducers/groceryReducer';
import groceries from '../__mocks__/mockGroceries';
import actionTypes from '../../actions/actionTypes';

describe('Grocery Reducer', () => {
  const initialState = {
    groceries: [],
    isLoading: false
  };
  it('should return the initial state', () => {
    expect(groceryReducer(undefined, { groceries: [] })).toEqual(initialState);
  });
  it('should get a response type of LOAD_GROCERIES_SUCCESS', () => {
    const action = {
      type: actionTypes.LOAD_GROCERIES_SUCCESS,
      groceryData: groceries
    };
    expect(groceryReducer(initialState, action))
      .toEqual({
        groceries,
        isLoading: false
      });
  });
  it('should get a response type of PURCHASE_GROCERY_SUCCESS', () => {
    const action = {
      type: actionTypes.PURCHASE_GROCERY_SUCCESS,
      id: groceries[0]._id
    };
    initialState.groceries.push(groceries[0]);
    const updatedGrocery = Object.assign({}, groceries[0], { purchased: true });
    expect(groceryReducer(initialState, action))
      .toEqual({
        groceries: [updatedGrocery]
      });
  });
  it('should get a response of DELETE_GROCERY_SUCCESS', () => {
    const action = {
      type: actionTypes.DELETE_GROCERY_SUCCESS,
      id: groceries[0]._id
    };
    expect(groceryReducer(initialState, action))
      .toEqual({
        groceries: [],
        isLoading: false
      });
  });
  it('should get a response of IS_LOADING', () => {
    const action = {
      type: actionTypes.IS_LOADING,
      bool: false
    };
    expect(groceryReducer(initialState, action))
      .toEqual({
        groceries: [groceries[0]],
        isLoading: false
      });
  });
  it('should get a response of ADD_GROCERY_SUCCESS', () => {
    const action = {
      type: actionTypes.ADD_GROCERY_SUCCESS,
      grocery: groceries[0]
    };
    expect(groceryReducer({
      groceries: [],
      isLoading: false
    }, action))
      .toEqual({
        groceries: [groceries[0]],
        isLoading: false
      });
  });
});