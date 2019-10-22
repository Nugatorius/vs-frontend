import React from 'react';
import { shallow } from 'enzyme';
import Headline from './index';
import {checkProps, findByTestAttr} from '../../../utils';

const setUp = (props={}) => { return shallow(<Headline {...props} />) };

describe('Headline Component', () => {


  describe('Checking PropTypes', () => {
    it('Should not throw a warning',() => {
      const expectedProps = {
        header: 'Test Header',
        desc: 'Test Description'
      }

      const propsErr = checkProps(Headline, expectedProps);
      expect(propsErr).toBe(undefined);
    })

  })
  

  describe('Have props', () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        header: 'Test Header',
        desc: 'Test desc'
      }
      wrapper = setUp(props);
    })

    it('Should render without errors', () => {
      expect(findByTestAttr(wrapper,'HeadlineComponent').length).toBe(1);
    })
    it('Should render a H1', () => {
      expect(findByTestAttr(wrapper,'header').length).toBe(1);
    })
    it('Should render a description', () => {
      expect(findByTestAttr(wrapper,'desc').length).toBe(1);
    })
  
  })

  describe('Have no props', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setUp();
    })

    it('Should render without errors', () => {
      expect(findByTestAttr(wrapper,'HeadlineComponent').length).toBe(0);
    })
    it('Should render a H1', () => {
      expect(findByTestAttr(wrapper,'header').length).toBe(0);
    })
    it('Should render a description', () => {
      expect(findByTestAttr(wrapper,'desc').length).toBe(0);
    })
  
  })

})