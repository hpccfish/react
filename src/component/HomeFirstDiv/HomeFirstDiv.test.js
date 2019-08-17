import React from 'react';
import { shallow } from 'enzyme';
import HomeFirstDiv from './HomeFirstDiv';

describe('<HomeFirstDiv />', () => {
  test('renders', () => {
    const wrapper = shallow(<HomeFirstDiv />);
    expect(wrapper).toMatchSnapshot();
  });
});
