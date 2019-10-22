import React from 'react';
import { shallow } from 'enzyme';
import Header from './index';
import {findByTestAttr} from '../../../utils';

const setUp = (props={}) => { return shallow(<Header />) };

describe('Header Component', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  })
  it('Should render without errors', () => {
    expect(findByTestAttr(component,'headerComponent').length).toBe(1);
  })
  
  it('Should render a logo', () => {
    expect(findByTestAttr(component,'logoIMG').length).toBe(1);
  })
})