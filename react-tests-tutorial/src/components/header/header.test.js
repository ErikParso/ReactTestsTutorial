import React from 'react';
import { shallow } from 'enzyme';
import Header from './index';
import { findByDataTestAttr } from './../../../utils';

const setUp = (props = {}) => {
    const component = shallow(<Header {...props} />)
    return component;
};

describe('Header component', () => {

    let component;
    beforeEach(() => {
        component = setUp();
    });

    it('Should render without errors', () => {
        const wrapper = findByDataTestAttr(component, 'header-component');
        expect(wrapper.length).toBe(1);
    });

    it('Should render a logo', () => {
        const logo = findByDataTestAttr(component, 'img-logo');
        expect(logo.length).toBe(1);
    });

});
