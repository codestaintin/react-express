import React from 'react';
import { shallow } from 'enzyme';
import GroceryList from '../../../components/Grocery/GroceryList';

describe('<GroceryList>', () => {
  const props = {
    groceries: [],
    handleDelete: jest.fn(() => {}),
    handlePurchase: jest.fn(() => {})
  };

  it('renders the GroceryList', () => {
    const tree = shallow(<GroceryList {...props} />);
    expect(tree).toMatchSnapshot();
  });
});