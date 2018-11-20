import React from 'react';
import { shallow } from 'enzyme';
import { Grocery } from '../../../components/Grocery/Grocery';

describe('<Grocery>', () => {
  const props = {
    groceries: [],
    getAllGroceries: jest.fn(() => {}),
    deleteGrocery: jest.fn(() => {}),
    createGrocery: jest.fn(() => {}),
    purchaseGrocery: jest.fn(() => {}),
    loading: false
  };
  const tree = shallow(<Grocery {...props} />);

  it('should render Grocery', () => {
    expect(tree).toMatchSnapshot();
  });
  it('should simulate componentDidMount', () => {
    const spy = jest.spyOn(tree.instance(), 'componentDidMount');
    tree.instance().componentDidMount();
    expect(spy).toHaveBeenCalled();
  });
  it('should simulate handleDelete', () => {
    const spy = jest.spyOn(tree.instance(), 'handleDelete');
    tree.instance().handleDelete({ id: '5bf0ae8d928a2ec2656eeb46' });
    expect(spy).toHaveBeenCalled();
  });
  it('should simulate handlePurchase', () => {
    const spy = jest.spyOn(tree.instance(), 'handlePurchase');
    tree.instance().handlePurchase({ id: '5bf0ae8d928a2ec2656eeb46' });
    expect(spy).toHaveBeenCalled();
  });
  it('should simulate handleCreateGrocery', () => {
    const spy = jest.spyOn(tree.instance(), 'handleCreateGrocery');
    tree.instance().handleCreateGrocery({ grocery: 'Food' });
    expect(spy).toHaveBeenCalled();
  });
});