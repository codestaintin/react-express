import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import Header from '../../../components/Common/Header';

describe('<Header>', () => {
  let shallowComponent;
  beforeEach(() => {
    shallowComponent = shallow(<Header />);
  });

  it('renders the Header component', () => {
    const tree = toJson(shallowComponent);
    expect(tree).toMatchSnapshot();
  });
});