import './index.css'
import {Link} from 'react-router-dom'

const Header = () => (
  <nav>
    <div className="Nav-container-1">
      <div className="logo-container">
        <img
          className="logo-image"
          src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
          alt="wave"
        />
        <h1>Wave</h1>
      </div>
      <div>
        <ul className="ul-container">
          <li className="li-item">
            <Link to="/">Home</Link>
          </li>
          <li className="li-item">
            <Link to="/about">About</Link>
          </li>
          <li className="li-item">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
)

export default Header
