const MoneyDetails = props => {
  const {yourBalance, yourIncome, yourExpenses} = props
  return (
    <div>
      <div>
        <p>Your Balance: {yourBalance}</p>
        <p>Your Income: {yourIncome}</p>
        <p>Your Expenses: {yourExpenses}</p>
      </div>
    </div>
  )
}

export default MoneyDetails
