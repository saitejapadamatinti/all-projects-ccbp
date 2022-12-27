// Write your code here
import {Link} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const onToggleTheme = () => {
        toggleTheme()
      }

      const themeImageURL = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

      const navbarBgClassName = isDarkTheme
        ? 'navbar-bg-dark'
        : 'navbar-bg-light'

      const websiteLogoImageURL = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'

      const navItemClassName = isDarkTheme
        ? 'list-text-dark-theme'
        : 'list-text-light-theme'

      return (
        <div className={`navbar ${navbarBgClassName}`}>
          <div className="navbar-content">
            <img
              className="website-logo"
              src={websiteLogoImageURL}
              alt="website logo"
            />
            <ul className="nav-menu">
              <li className="nav-menu-item">
                <Link to="/" className={`nav-link ${navItemClassName}`}>
                  Home
                </Link>
              </li>
              <li className="nav-menu-item">
                <Link to="/about" className={`nav-link ${navItemClassName}`}>
                  About
                </Link>
              </li>
            </ul>
            <button
              testid="theme"
              className="theme-button"
              type="button"
              onClick={onToggleTheme}
            >
              <img className="theme-image" src={themeImageURL} alt="theme" />
            </button>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
