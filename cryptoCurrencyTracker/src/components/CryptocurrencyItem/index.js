const CryptocurrencyItem = props => {
  const {cryptoList} = props
  const {currencyLogo, currencyName, euroValue, usdValue} = cryptoList
  return (
    <li>
      <img alt={currencyName} src={currencyLogo} />
      <p>{currencyName}</p>
      <p>{euroValue}</p>
      <p>{usdValue}</p>
    </li>
  )
}

export default CryptocurrencyItem
