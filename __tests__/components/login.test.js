import React from 'react';
import { MockedProvider } from '@apollo/react-testing';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import Login from '../../src/components/login';


describe('<Login /> component', () => {
    const wrapper = mount(
        <MockedProvider>
            <Login />
        </MockedProvider>
    );
    it('Should input data', () => {
        const emailInput = wrapper.find('#email');
        const passwordInput = wrapper.find('#password');
        const submitButton = wrapper.find('.btn');
        act(() => {
            emailInput.simulate('change', { target: { value: 'test@test.com', name: 'email' }});
            passwordInput.simulate('change', { target: { value: 'password', name: 'password' }});
            submitButton.simulate('submit');
        })
    })
})
