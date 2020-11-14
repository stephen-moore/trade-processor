import React, {Component} from 'react';

import axios from 'axios';
import Trades from "./Trades/Trades";

class viewTrades extends Component {
    state = {
        trades: []
    };

    intervalID = 0;

    componentDidMount() {
        axios.get('http://localhost/tradeProcessor/view.php').then(
            res => {
                this.setState({trades: res.data})
            }
        ).catch((error) => {
            console.log(error)
        })

        this.intervalID = setInterval(()=>{
            axios.get('http://localhost/tradeProcessor/view.php').then(
                res => {
                    this.setState({trades: res.data})
                }
            ).catch((error) => {
                console.log(error)
            })
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.intervalID);
    }

    render() {
        let trades =
            <Trades
                trades={this.state.trades}
            />;

        return <div>
            <h3>Trades Board</h3>
            <table className='table'>
                <thead className='thead-dark'>
                <tr>
                    <th>User ID</th>
                    <th>Currency From</th>
                    <th>Currency To</th>
                    <th>Amount Sell</th>
                    <th>Amount Buy</th>
                    <th>Rate</th>
                    <th>Time Placed</th>
                    <th>Origin Country</th>
                </tr>
                </thead>
                <tbody>
                {trades}
                </tbody>
            </table>
        </div>
    }
}

export default viewTrades
