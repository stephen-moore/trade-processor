import React, {Component} from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class addTrade extends Component {
    state = {
        userId: '134256',
        currencyFrom: 'EUR',
        currencyTo: 'GBP',
        amountSell: '1000',
        amountBuy: '821',
        rate: '0.821',
        originatingCountry: 'IE'
    };

    userIdChangeHandler = (event) => {
        this.setState({
            userId: event.target.value,
        })
    }

    currencyFromChangeHandler = (event) => {
        this.setState({
                currencyFrom: event.target.value,
        })
    }

    currencyToChangeHandler = (event) => {
        this.setState({
            currencyTo: event.target.value,
        })
    }

    amountSellChangeHandler = (event) => {
        this.setState({
            amountSell: event.target.value,
        })
    }

    amountBuyChangeHandler = (event) => {
        this.setState({
            amountBuy: event.target.value,
        })
    }

    rateChangeHandler = (event) => {
        this.setState({
            rate: event.target.value,
        })
    }

    countryChangeHandler = (event) => {
        this.setState({
            originatingCountry: event.target.value,
        })
    }

    onSubmit = (event) => {
        event.preventDefault();

        const obj = {
            userId: this.state.userId,
            currencyFrom: this.state.currencyFrom,
            currencyTo: this.state.currencyTo,
            amountBuy: this.state.amountBuy,
            amountSell: this.state.amountSell,
            rate: this.state.rate,
            originatingCountry: this.state.originatingCountry
        }

        const headers = {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*",
        }

        axios.post('http://localhost/tradeProcessor/add.php', obj, {
            headers: headers
        }).then(
            res => console.log(res.data)
        );

        toast('Trade Saved', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

        render() {
            return <div>
                <h3>Add Trade</h3>
                <Form onSubmit={this.onSubmit}>
                <Form.Group controlId="formUserId">
                    <Form.Label>UserId:</Form.Label>
                    <Form.Control
                        type="number"
                        required
                        value={this.state.userId}
                        onChange={this.userIdChangeHandler} />
                </Form.Group>
                <Form.Group controlId="formCurrencyFrom">
                    <Form.Label>Currency From:</Form.Label>
                    <Form.Control
                        type="text"
                        required
                        value={this.state.currencyFrom}
                        onChange={this.currencyFromChangeHandler} />
                </Form.Group>
                <Form.Group controlId="formCurrencyTo">
                    <Form.Label>Currency To:</Form.Label>
                    <Form.Control
                        type="text"
                        required
                        value={this.state.currencyTo}
                        onChange={this.currencyToChangeHandler} />
                </Form.Group>
                <Form.Group controlId="formAmountSell">
                    <Form.Label>Amount Sell:</Form.Label>
                    <Form.Control
                        type="number"
                        step=".01"
                        required
                        value={this.state.amountSell}
                        onChange={this.amountSellChangeHandler}
                    />
                </Form.Group>
                <Form.Group controlId="formAmountBuy">
                    <Form.Label>Amount Buy:</Form.Label>
                    <Form.Control
                        type="number"
                        step=".01"
                        required
                        value={this.state.amountBuy}
                        onChange={this.amountBuyChangeHandler} />
                </Form.Group>
                <Form.Group controlId="formRate">
                    <Form.Label>Rate:</Form.Label>
                    <Form.Control
                        type="number"
                        step=".0001"
                        required
                        value={this.state.rate}
                        onChange={this.rateChangeHandler} />
                </Form.Group>
                <Form.Group controlId="formOriginatingCountry">
                    <Form.Label>Originating Country:</Form.Label>
                    <Form.Control
                        type="text"
                        required
                        value={this.state.originatingCountry}
                        onChange={this.countryChangeHandler}
                    />
                </Form.Group>
                <Form.Text className="text-muted">
                    Time placed is set when posted.
                </Form.Text>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    }
}

export default addTrade
