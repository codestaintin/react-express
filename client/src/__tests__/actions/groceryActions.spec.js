import moxios from 'moxios';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import groceries from '../__mocks__/mockGroceries';
import actionTypes from '../../actions/actionTypes';
import {
  deleteGrocery,
  purchaseGrocery,
  createGrocery,
  getAllGroceries
} from '../../actions/grocery/groceryActions';

const {
  LOAD_GROCERIES_SUCCESS,
  PURCHASE_GROCERY_SUCCESS,
  ADD_GROCERY_SUCCESS,
  DELETE_GROCERY_SUCCESS,
  IS_LOADING
} = actionTypes;

const mockStore = configureStore([thunk]);

describe('Grocery Action', () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  it('should dispatch LOAD_GROCERIES_SUCCESS', (done) => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: { groceries }
      });
    });
    const store = mockStore();
    const expectedActions = [
      {
        type: IS_LOADING,
        bool: true
      },
      {
        type: LOAD_GROCERIES_SUCCESS,
        groceryData: { groceries }
      },
      {
        type: IS_LOADING,
        bool: false
      }
    ];
    store.dispatch(getAllGroceries())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        done();
      });
  });
  it('should dispatch ADD_GROCERY_SUCCESS', (done) => {
    const response = {
      groceryItem: {
        purchased: false,
        _id: '5bf439c79d4f844132176829',
        name: 'Grapes'
      }
    };
    const serverResponse = {
      groceryItem: {
        purchased: false,
        _id: '5bf439c79d4f844132176829',
        name: 'Grapes'
      }
    };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 201,
        response
      });
    });
    const store = mockStore();
    const expectedActions = [
      {
        type: actionTypes.ADD_GROCERY_SUCCESS,
        grocery: serverResponse.groceryItem
      }
    ];
    store.dispatch(createGrocery())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        done();
      });
  });
});