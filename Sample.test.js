import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import Sample from './Sample';

Enzyme.configure({ adapter: new Adapter() });

describe('Sample.jsx', () => {
  const defaultValues = {
    title: 'hoge',
  };

  const makeComponent = (args = {}) => (<Sample {...Object.assign({}, defaultValues, args)} />);

  test('show h1', () => {
    const component = shallow(makeComponent());
    expect(component.find('h1').text()).toEqual('hoge');
  })

})
