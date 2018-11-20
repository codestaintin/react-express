import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import NotFound from '../../../components/Common/NotFound';


describe('<NoutFound>', () => {
  let shallowComponent;
  beforeEach(() => {
    shallowComponent = shallow(<NotFound />);
  });

  it('renders the NotFound component', () => {
    const tree = toJson(shallowComponent);
    expect(tree).toMatchSnapshot();
  });
});