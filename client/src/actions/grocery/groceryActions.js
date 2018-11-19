import axios from 'axios';
import actionTypes from '../actionTypes';

const getGroceriesSuccess = groceryData => ({
  type: actionTypes.LOAD_GROCERIES_SUCCESS,
  groceryData
});

const purchaseGroceriesSuccess = id => ({
  type: actionTypes.PURCHASE_GROCERY_SUCCESS,
  id
});

const createGroceriesSuccess = grocery => ({
  type: actionTypes.ADD_GROCERY_SUCCESS,
  grocery
});

const deleteGrocerySuccess = id => ({
  type: actionTypes.DELETE_GROCERY_SUCCESS,
  id
});

const isLoading = bool => ({
  type: actionTypes.IS_LOADING,
  bool
});

export const getAllGroceries = () => dispatch => {
  dispatch(isLoading(true));
  axios.get('/api/v1/groceries')
    .then((res) => {
      dispatch(getGroceriesSuccess(res.data));
      dispatch(isLoading(false));
    })
    .catch(error => {
      throw (error);
    });
};

export const createGrocery = (name) => dispatch => {
  axios.post('/api/v1/grocery', { name })
    .then((res) => {
      dispatch(createGroceriesSuccess(res.data.groceryItem));
    })
    .catch(error => {
      throw (error);
    });
};

export const deleteGrocery = id => dispatch => {
  axios.delete(`/api/v1/grocery/${id}`)
    .then((res) => {
      dispatch(deleteGrocerySuccess(id));
    })
    .catch(error => {
      throw (error);
    });
};

export const purchaseGrocery = id => dispatch => {
  axios.get(`api/v1/grocery/${id}/purchase`)
    .then((res) => {
      dispatch(purchaseGroceriesSuccess(id));
    })
    .catch(error => {
      throw (error);
    });
};

export default getAllGroceries;
