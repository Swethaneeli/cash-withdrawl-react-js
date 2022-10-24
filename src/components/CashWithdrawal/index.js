// Write your code here
import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {cash: 2000}

  cashWithdraw = value => {
    const {cash} = this.state
    this.setState({cash: cash - value})
  }

  render() {
    const {denominationsList} = this.props
    const {cash} = this.state

    return (
      <div className="cashWithdrawal-container">
        <div className="customer-container">
          <div className="name-container">
            <h1 className="icon">S</h1>
            <h2 className="name">Sarah Williams</h2>
          </div>
          <div className="balance-container">
            <p className="balance">Your Balance</p>
            <div className="amount-container">
              <p className="amount">{cash}</p>
              <p className="in-rupees">In Rupees</p>
            </div>
          </div>
          <p className="withdraw-heading">Withdraw</p>
          <p className="choose-denomination">CHOOSE SUM (IN RUPEES) </p>
          <ul className="denominations-container">
            {denominationsList.map(eachDenomination => (
              <DenominationItem
                denominationDetails={eachDenomination}
                cashWithdraw={this.cashWithdraw}
                key={eachDenomination.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
