import {Component} from 'react'

import Loader from 'react-loader-spinner'

import CryptocurrencyItem from '../CryptocurrencyItem'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class CryptocurrencyTracker extends Component {
  state = {
    cryptoList: [],
    isSpinner: true,
  }

  componentDidMount() {
    this.getCryptoDetails()
  }

  getCryptoDetails = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const getData = await response.json()
    const NewData = getData.map(each => ({
      currencyLogo: each.currency_logo,
      currencyName: each.currency_name,
      euroValue: each.euro_value,
      id: each.id,
      usdValue: each.usd_value,
    }))
    this.setState({cryptoList: NewData, isSpinner: false})
  }

  render() {
    const {cryptoList, isSpinner} = this.state

    return (
      <div>
        <h1>Cryptocurrency Tracker</h1>
        <img
          alt="cryptocurrency"
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
        />
        <div>
          <span>Coin type</span> <span> </span>
          <span>USD</span>
          <span> </span>
          <span>EURO</span>
          <ul>
            {isSpinner ? (
              <div testid="loader">
                <Loader
                  type="TailSpin"
                  color="#00BFFF"
                  height={50}
                  width={50}
                />
              </div>
            ) : (
              cryptoList.map(each => (
                <CryptocurrencyItem key={each.id} cryptoList={each} />
              ))
            )}
          </ul>
        </div>
      </div>
    )
  }
}
export default CryptocurrencyTracker
