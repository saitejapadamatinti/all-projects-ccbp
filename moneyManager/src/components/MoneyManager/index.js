import {Component} from 'react'

import {v4} from 'uuid'

import MoneyDetails from '../MoneyDetails'

import TransectionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    transectionItemList: [],
    title: '',
    amount: '',
    type: transactionTypeOptions[0].optionId,
  }

  titleInput = event => {
    this.setState({title: event.target.value})
  }

  amountInput = event => {
    this.setState({amount: event.target.value})
  }

  optionItems = event => {
    this.setState({type: event.target.value})
  }

  addingButton = () => {
    const {title, amount, type} = this.state
    const newList = {
      id: v4(),
      Newtitle: title,
      amount: parseInt(amount),
      Newtype: type,
    }

    this.setState(prevState => ({
      ...prevState.transectionItemList,
      newList,
    }))
  }

  render() {
    const {title, amount, type} = this.state

    return (
      <div>
        <div>
          <MoneyDetails yourBalance={0} yourIncome={0} yourExpenses={0} />
          <div>
            <p>Add Transaction</p>

            {/* titlle input */}
            <p>TITLE</p>
            <input onChange={this.titleInput} type="text" />

            {/* amount input */}
            <p>AMOUNT</p>
            <input onChange={this.amountInput} type="number" />

            {/* select input */}
            <select onChange={this.optionItems}>
              {transactionTypeOptions.map(each => (
                <option key={each.optionId} value={each.optionId}>
                  {each.displayText}
                </option>
              ))}
            </select>
          </div>
          <button onClick={this.addingButton} type="button">
            ADD
          </button>
          <ul>
            <TransectionItem title={title} amount={amount} type={type} />
          </ul>
        </div>
      </div>
    )
  }
}

export default MoneyManager
