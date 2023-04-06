import {Component} from 'react'
import DenominationItem from '../DenominationItem/index'
import './index.css'

class CashWithdrawal extends Component {
  state = {value: 2000}

  add = value => {
    this.setState(prevState => ({value: prevState.value - value}))
  }

  render() {
    const {denominationsList} = this.props
    const {value} = this.state
    return (
      <div className="bg">
        <div className="card">
          <div className="name-section">
            <div className="logo">
              <p>S</p>
            </div>
            <h1 className="name">Sarah Williams</h1>
          </div>
          <div className="balance-section">
            <p className="your-balance">Your Balance</p>
            <div>
              <p className="rupee-text">{value}</p>
              <p className="rupee">In Rupees</p>
            </div>
          </div>
          <p className="withdraw">Withdrawal</p>
          <p className="choose">CHOOSE SUM (IN RUPEES)</p>
          <ul className="buttons-container">
            {denominationsList.map(userList => (
              <DenominationItem
                userList={userList}
                add={this.add}
                key={userList.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
