import React from 'react';
import { shallow } from 'enzyme';
import Headline from './index';
import { findByDataTestAttr } from './../../../utils';

const setUp = (props = {}) => {
    const component = shallow(<Headline {...props} />);
    return component;
};

describe('Headline component', () => {

    describe('Have props', () => {

        let component;
        beforeEach(() => {
            const props = {
                header: 'Test Header',
                description: 'Test description'
            };
            component = setUp(props);
        });

        it('Should render without errors', () => {
            const headline = findByDataTestAttr(component, 'headline-component');
            expect(headline.length).toBe(1);
        });

    });

    describe('Have NO props', () => {

        let component;
        beforeEach(() => {
            component = setUp({});
        });

        it('Should not rennder', () => {
            const headline = findByDataTestAttr(component, 'headline-component');
            expect(headline.length).toBe(0);
        });

    });

});