import {Component} from 'react'

import Loader from 'react-loader-spinner'

import LanguageFilterItem from '../LanguageFilterItem'

import RepositoryItem from '../RepositoryItem'

import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

// Write your code here
class GithubPopularRepos extends Component {
  state = {
    activeTab: 'ALL',
    neededList: [],
    isTrue: true,
    isFail: false,
  }

  componentDidMount() {
    this.getDetails()
  }

  getDetails = async () => {
    try {
      const {activeTab} = this.state
      const response = await fetch(
        `https://apis.ccbp.in/popular-repos?language=${activeTab}`,
      )
      const data = await response.json()
      if (response.ok) {
        this.successDetails(data.popular_repos)
      }
    } catch (e) {
      this.failureDetails()
    }
  }

  clickButton = id => {
    this.setState({activeTab: id, isTrue: true, isFail: false}, this.getDetails)
  }

  successDetails = listDetails => {
    const newDetails = listDetails.map(eachObject => ({
      name: eachObject.name,
      id: eachObject.id,
      issuesCount: eachObject.issues_count,
      forksCount: eachObject.forks_count,
      starsCount: eachObject.stars_count,
      avatarUrl: eachObject.avatar_url,
    }))
    this.setState({neededList: newDetails, isTrue: false})
  }

  failureDetails = () => this.setState({isFail: true, isTrue: true})

  render() {
    const {activeTab, isTrue, neededList, isFail} = this.state
    return (
      <div className="main-bg">
        <h1 className="main-heading">Popular</h1>
        <ul className="ul-list">
          {languageFiltersData.map(eachData => (
            <LanguageFilterItem
              key={eachData.id}
              itemDetails={eachData}
              clickAction={this.clickButton}
              activeId={activeTab}
            />
          ))}
        </ul>
        {isTrue && (
          <>
            {!isFail && (
              <div>
                <Loader
                  type="ThreeDots"
                  color="#0284c7"
                  height={80}
                  width={80}
                />
              </div>
            )}
            {isFail && (
              <>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
                  className="f-image"
                  alt="failure view"
                />
                <h1 className="error-msg">Something Went Wrong</h1>
              </>
            )}
          </>
        )}
        {!isTrue && (
          <ul className="repo-list">
            {neededList.map(eachValue => (
              <RepositoryItem key={eachValue.id} repoDetails={eachValue} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default GithubPopularRepos
