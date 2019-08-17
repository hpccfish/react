import React from 'react';
import { shallow } from 'enzyme';
import WithLayout from './withLayout';

describe('<WithLayout />', () => {
  test('renders', () => {
    const wrapper = shallow(<WithLayout />);
    expect(wrapper).toMatchSnapshot();
  });
});
