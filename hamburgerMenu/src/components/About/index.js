import Header from '../Header'

import './index.css'

const About = () => (
  <div className="about-container">
    <Header />
    <div className="about-image-container">
      <img
        className="mobile-about-image"
        src="https://assets.ccbp.in/frontend/react-js/about-sm-img.png"
        alt="About"
      />
      <img
        className="desktop-about-image"
        src="https://assets.ccbp.in/frontend/react-js/about-lg-img.png"
        alt="About"
      />
    </div>
  </div>
)

export default About
