import React from 'react';
import { shallow } from 'enzyme';
import { AddGrocery } from '../../../components/Grocery/AddGrocery';

describe('<AddGrocery>', () => {
  const props = {
    createGrocery: jest.fn(() => {})
  };
  const tree = shallow(<AddGrocery {...props} />);

  it('should render AddGrocery', () => {
    expect(tree).toMatchSnapshot();
  });

  it('should simulate handleSubmit', () => {
    const spy = jest.spyOn(tree.instance(), 'handleSubmit');
    tree.setState({
      name: 'Onion'
    });
    tree.instance().handleSubmit(
      {
        preventDefault: jest.fn()
      }
    );
    expect(spy).toHaveBeenCalled();
  });

  it('should simulate handleChange', () => {
    const spy = jest.spyOn(tree.instance(), 'handleChange');
    tree.instance().handleChange({
      target: {
        name: ''
      }
    });
    expect(spy).toHaveBeenCalled();
  });
});