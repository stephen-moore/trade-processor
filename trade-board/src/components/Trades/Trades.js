import React, {Component} from 'react';
import Trade from './Trade/Trade';

class Trades extends Component {
    render() {
        return this.props.trades.map((trade, index) => {
            return <Trade
                userId={trade.userId}
                currencyFrom={trade.currencyFrom}
                currencyTo={trade.currencyTo}
                amountSell={trade.amountSell}
                amountBuy={trade.amountBuy}
                rate={trade.rate}
                timePlaced={trade.timePlaced}
                country={trade.originCountry}
                key={trade.id}
            />
        });
    }

}

export default Trades;
