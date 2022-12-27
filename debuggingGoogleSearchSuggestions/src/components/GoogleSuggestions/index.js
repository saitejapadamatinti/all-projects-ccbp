import React from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends React.Component {
  state = {keyword: ''}

  getSearchTerm = event => {
    this.setState({keyword: event.target.value})
  }

  updateSearchInput = value => {
    this.setState({keyword: value})
  }

  render() {
    const {keyword} = this.state
    const {suggestionsList} = this.props
    return (
      <div className="container">
        <div>
          <img
            className="gImage"
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
          />
        </div>
        <div className="searchContainer">
          <div className="searchBar">
            <img
              className="searchIcon"
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
            />
            <input
              value={keyword}
              onChange={this.getSearchTerm}
              placeholder="Search Google"
              type="search"
            />
          </div>
          <ul>
            {suggestionsList
              .filter(e =>
                e.suggestion.toLowerCase().includes(keyword.toLowerCase()),
              )
              .map(eachItem => (
                <SuggestionItem
                  keyword={keyword}
                  suggestions={eachItem}
                  key={eachItem.id}
                  updateSearchInput={this.updateSearchInput}
                />
              ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default GoogleSuggestions
