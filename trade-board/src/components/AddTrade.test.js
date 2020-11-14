import { render, screen } from '@testing-library/react';
import AddTrade from './AddTrade';

import React from "react";

import { shallow } from 'enzyme';
import {Form} from "react-bootstrap";



test('renders Add Trade Title', () => {
    render(<AddTrade />);
    const element = screen.getByText(/Add Trade/i);
    expect(element).toBeInTheDocument();
});

test('onSubmit Called Once', () => {
    const onSubmit = jest.fn().mockImplementation((cb) => () => cb(
        {
            "userId":"134256",
            "currencyFrom": "EUR",
            "currencyTo": "GBP",
            "amountSell": 1000,
            "amountBuy": 747.10,
            "rate": 0.7471,
            "timePlaced": "24-JAN-18 10:27:44",
            "originatingCountry": "GB"
        }));

    const wrapper = shallow(<Form onSubmit={onSubmit} />);
    wrapper.find('form').simulate('submit')
    expect(onSubmit).toBeCalledTimes(1);
});
