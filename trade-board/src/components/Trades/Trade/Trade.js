import React, {Component} from 'react';

class Trade extends Component {
render() {
    return (
        <tr key={this.props.id}>
            <td >
                {this.props.userId}
            </td>
            <td>
                {this.props.currencyFrom}
            </td>
            <td>
                {this.props.currencyTo}
            </td>
            <td>
                {this.props.amountSell}
            </td>
            <td>
                {this.props.amountBuy}
            </td>
            <td>
                {this.props.rate}
            </td>
            <td>
                {this.props.timePlaced}
            </td>
            <td>
                {this.props.country}
            </td>
        </tr>
    );
}
}

export default Trade;
