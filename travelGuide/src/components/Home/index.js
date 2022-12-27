import {Component} from 'react'
import './index.css'
import Loader from 'react-loader-spinner'

import LocationContainer from '../LocationContainer'

class Home extends Component {
  state = {
    locationsList: [],
    isLoading: false,
  }

  componentDidMount() {
    this.apiUrlPackages()
  }

  apiUrlPackages = async () => {
    this.setState({
      isLoading: true,
    })
    const apiUrl = 'https://apis.ccbp.in/tg/packages'
    const options = {
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()

      const updatedData = fetchedData.packages.map(location => ({
        id: location.id,
        name: location.name,
        imageUrl: location.image_url,
        description: location.description,
      }))
      this.setState({
        locationsList: updatedData,
        isLoading: false,
      })
    }
  }

  renderLocationsList = () => {
    const {locationsList} = this.state
    return (
      <ul className="locations-list">
        {locationsList.map(location => (
          <LocationContainer locationData={location} key={location.id} />
        ))}
      </ul>
    )
  }

  renderLoader = () => (
    <div testid="loader" className="loader-container">
      <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
    </div>
  )

  render() {
    const {isLoading} = this.state
    return (
      <div className="app-container">
        <h1 className="travel-heading">Travel Guide</h1>
        <hr className="horizontal-line" />
        <div className="locations-container">
          {isLoading ? this.renderLoader() : this.renderLocationsList()}
        </div>
      </div>
    )
  }
}

export default Home
