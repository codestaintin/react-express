import React from 'react';
import { shallow } from 'enzyme';
import GroceryListRow from '../../../components/Grocery/GroceryListRow';

describe('<GroceryListRow>', () => {
  const props = {
    grocery: {},
    handleDelete: jest.fn(() => {}),
    handlePurchase: jest.fn(() => {})
  };

  it('should render GroceryListRow', () => {
    const tree = shallow(<GroceryListRow {...props} />);
    expect(tree).toMatchSnapshot();
  });

  it('simulate a buy click', () => {
    const tree = shallow(<GroceryListRow {...props} />);
    tree.find('.btn-primary').simulate('click');
  });

  it('simulate a delete click', () => {
    const tree = shallow(<GroceryListRow {...props} />);
    tree.find('.btn-danger').simulate('click');
  });
});
