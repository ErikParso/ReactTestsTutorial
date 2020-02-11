import React from 'react';
import { shallow } from 'enzyme';
import { findByDataTestAttr } from './../../../utils';
import SharedButton from './index';

describe('DaherdButton Component', () => {

    describe('Renders', () => {

        let component;

        beforeEach(() => {
            component = shallow(<SharedButton buttonText="Test button" emitevent={() => {}}/>);
        });

        it("Shoult render a button", () => {
            const btn = findByDataTestAttr(component, "buttonComponent");
            expect(btn.length).toBe(1);
        });

    });

});