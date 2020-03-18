import React from 'react';
import { mount } from 'enzyme';
import { MockedProvider } from '@apollo/react-testing';
import App from '../src/components/App';

describe('APP', () => {
    it('Should render', () => {
        const wrapper = mount(
            <MockedProvider>
                <App />
            </MockedProvider>
        );
    })
});
