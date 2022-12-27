import {Component} from 'react'

import {FaSearch, FaMoon} from 'react-icons/fa'

import {RiSunFill} from 'react-icons/ri'

import {VscThreeBars} from 'react-icons/vsc'

import {AiFillCloseCircle} from 'react-icons/ai'

import {Link, withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'

import SearchContext from '../../context/SearchContext'

import './index.css'

class Header extends Component {
  state = {mobileView: false, showSearch: false, first: true}

  logoutButton = () => {
    const {history} = this.props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  threeDots = () => {
    this.setState({mobileView: true})
    this.setState({showSearch: false})
  }

  crossButton = () => {
    this.setState({mobileView: false})
  }

  searchButton = () => {
    this.setState({showSearch: true})
    this.setState({mobileView: false})
  }

  render() {
    const {mobileView, showSearch, first} = this.state

    const firstName = first ? 'first-name' : ''
    return (
      <SearchContext.Consumer>
        {value => {
          const {
            toggleSearch,
            searchValMethod,
            toggleEnter,
            isDarkTheme,
            toggleTheme,
          } = value
          const searchIcon = () => {
            toggleSearch()
          }

          const enterButton = event => {
            if (event.key === 'Enter') {
              toggleEnter()
            }
          }

          const onChangeValue = event => {
            searchValMethod(event.target.value)
          }

          const themeButton = () => {
            toggleTheme()
          }

          return (
            <>
              {isDarkTheme ? (
                <div className="sun-cont">
                  <nav className="header-container sun-cont">
                    <div className="card-1-header">
                      <Link to="/">
                        <img
                          src="https://res.cloudinary.com/ddxkcazf7/image/upload/v1666241657/Standard_Collection_8_2_wuq96n.png"
                          alt="website logo"
                          className="login-website-header"
                        />
                      </Link>
                      <h1 className="header-head sun-hr">Insta Share</h1>
                    </div>
                    <div className="card-2-header">
                      <div className="card-1-header">
                        <input
                          type="search"
                          className="input-header"
                          placeholder="Search Caption"
                          onChange={onChangeValue}
                          onKeyDown={enterButton}
                        />

                        <button
                          type="button"
                          className="search-button"
                          onClick={searchIcon}
                        >
                          <div className="col">
                            <FaSearch />
                          </div>
                        </button>
                      </div>
                      <ul className="list-header-container">
                        <Link to="/" className="li-item-h li-m sun-hr">
                          <li>Home</li>
                        </Link>
                        <Link
                          to="/my-profile"
                          className="li-item-h li-m sun-hr"
                        >
                          Profile
                        </Link>
                        {isDarkTheme ? (
                          <button
                            type="button"
                            className="theme-butt"
                            onClick={themeButton}
                          >
                            <div className="sun sun-hr">
                              <RiSunFill />
                            </div>
                          </button>
                        ) : (
                          <button
                            type="button"
                            className="theme-butt"
                            onClick={themeButton}
                          >
                            <FaMoon />
                          </button>
                        )}
                      </ul>
                      <button
                        type="button"
                        className="head-butt"
                        onClick={this.logoutButton}
                      >
                        Logout
                      </button>
                    </div>
                    <div className="menu-container">
                      {isDarkTheme ? (
                        <button
                          type="button"
                          className="theme-butt"
                          onClick={themeButton}
                        >
                          <div className="sun sun-hr">
                            <RiSunFill />
                          </div>
                        </button>
                      ) : (
                        <button
                          type="button"
                          className="theme-butt"
                          onClick={themeButton}
                        >
                          <div className="moon">
                            <FaMoon />
                          </div>
                        </button>
                      )}

                      <div className="sun-hr menu-img">
                        <VscThreeBars
                          className="three-bars"
                          onClick={this.threeDots}
                        />
                      </div>
                    </div>
                  </nav>

                  {mobileView && (
                    <div className="header-mobile-view-container">
                      <Link to="/" className={`li-m ${firstName} sun-hr`}>
                        Home
                      </Link>
                      <p className="li-m sun-hr" onClick={this.searchButton}>
                        Search
                      </p>
                      <Link to="/my-profile" className="li-m sun-hr">
                        Profile
                      </Link>

                      <button
                        type="button"
                        className="head-butt"
                        onClick={this.logoutButton}
                      >
                        Logout
                      </button>
                      <div className="sun-hr menu-img">
                        <AiFillCloseCircle
                          className="three-bars"
                          onClick={this.crossButton}
                        />
                      </div>
                    </div>
                  )}
                  {showSearch && (
                    <div className="mobile-search">
                      <div className="card-1-header">
                        <input
                          type="search"
                          className="input-header"
                          placeholder="Search Caption"
                          onChange={onChangeValue}
                          onKeyDown={enterButton}
                        />
                        <button
                          type="button"
                          className="search-button"
                          onClick={searchIcon}
                        >
                          <div className="col">
                            <FaSearch />
                          </div>
                        </button>
                      </div>
                    </div>
                  )}
                  <hr className="sun-hr horizontal" />
                </div>
              ) : (
                <>
                  <nav className="header-container">
                    <div className="card-1-header">
                      <Link to="/">
                        <img
                          src="https://res.cloudinary.com/ddxkcazf7/image/upload/v1666241657/Standard_Collection_8_2_wuq96n.png"
                          alt="website logo"
                          className="login-website-header"
                        />
                      </Link>
                      <h1 className="header-head">Insta Share</h1>
                    </div>
                    <div className="card-2-header">
                      <div className="card-1-header">
                        <input
                          type="search"
                          className="input-header"
                          placeholder="Search Caption"
                          onChange={onChangeValue}
                          onKeyDown={enterButton}
                        />

                        <button
                          type="button"
                          className="search-button"
                          onClick={searchIcon}
                        >
                          <div className="col">
                            <FaSearch />
                          </div>
                        </button>
                      </div>
                      <ul className="list-header-container">
                        <Link to="/" className="li-item-h li-m">
                          <li>Home</li>
                        </Link>
                        <Link to="/my-profile" className="li-item-h li-m">
                          Profile
                        </Link>
                        {isDarkTheme ? (
                          <button
                            type="button"
                            className="theme-butt"
                            onClick={themeButton}
                          >
                            <div className="sun">
                              <RiSunFill />
                            </div>
                          </button>
                        ) : (
                          <button
                            type="button"
                            className="theme-butt"
                            onClick={themeButton}
                          >
                            <FaMoon />
                          </button>
                        )}
                      </ul>
                      <button
                        type="button"
                        className="head-butt"
                        onClick={this.logoutButton}
                      >
                        Logout
                      </button>
                    </div>
                    <div className="menu-container">
                      {isDarkTheme ? (
                        <button
                          type="button"
                          className="theme-butt"
                          onClick={themeButton}
                        >
                          <div className="sun">
                            <RiSunFill />
                          </div>
                        </button>
                      ) : (
                        <button
                          type="button"
                          className="theme-butt"
                          onClick={themeButton}
                        >
                          <div className="moon">
                            <FaMoon />
                          </div>
                        </button>
                      )}
                      <img
                        src="https://res.cloudinary.com/ddxkcazf7/image/upload/v1666438550/menu_5_yh6ay7.png"
                        alt=""
                        className="menu-img"
                        onClick={this.threeDots}
                      />
                    </div>
                  </nav>

                  {mobileView && (
                    <div className="header-mobile-view-container">
                      <Link to="/" className={`li-m ${firstName}`}>
                        Home
                      </Link>
                      <p className="li-m" onClick={this.searchButton}>
                        Search
                      </p>
                      <Link to="/my-profile" className="li-m">
                        Profile
                      </Link>

                      <button
                        type="button"
                        className="head-butt"
                        onClick={this.logoutButton}
                      >
                        Logout
                      </button>

                      <img
                        src="https://res.cloudinary.com/ddxkcazf7/image/upload/v1666450736/Shape_6_ulzxqm.png"
                        alt=""
                        className="cross"
                        onClick={this.crossButton}
                      />
                    </div>
                  )}
                  {showSearch && (
                    <div className="mobile-search">
                      <div className="card-1-header">
                        <input
                          type="search"
                          className="input-header"
                          placeholder="Search Caption"
                          onChange={onChangeValue}
                          onKeyDown={enterButton}
                        />
                        <button
                          type="button"
                          className="search-button"
                          onClick={searchIcon}
                        >
                          <div className="col">
                            <FaSearch />
                          </div>
                        </button>
                      </div>
                    </div>
                  )}
                  <hr />
                </>
              )}
            </>
          )
        }}
      </SearchContext.Consumer>
    )
  }
}

export default withRouter(Header)
