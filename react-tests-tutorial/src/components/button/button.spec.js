import React from 'react';
import { shallow } from 'enzyme';
import { findByDataTestAttr } from './../../../utils';
import SharedButton from './index';

describe('DaherdButton Component', () => {

    describe('Renders', () => {

        let component;
        let mockFunc;

        beforeEach(() => {
            mockFunc = jest.fn();
            component = shallow(<SharedButton
                buttonText="Test button"
                emitEvent={mockFunc} />);
        });

        it("Shoult render a button", () => {
            const btn = findByDataTestAttr(component, "buttonComponent");
            expect(btn.length).toBe(1);
        });

        it("Should emit callback on click event", () => {
            const btn = findByDataTestAttr(component, "buttonComponent");
            btn.simulate("click");
            const callback = mockFunc.mock.calls.length;
            expect(callback).toBe(1);
        });

    });

});