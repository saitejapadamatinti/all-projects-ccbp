import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Layout = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value
      return (
        <div className="layout-div">
          {showContent ? (
            <div className="left-nav-div">
              <p>Left Navbar Menu</p>
              <p>item 1</p>
              <p>item 2</p>
              <p>item 3</p>
              <p>item 4</p>
            </div>
          ) : null}
          {showLeftNavbar ? (
            <div className="content-nav-div">
              <p>Content</p>
              <p>Content</p>
            </div>
          ) : null}
          {showRightNavbar ? (
            <div className="right-nav-div">
              <p>Left Navbar Menu</p>
              <p>item 1</p>
              <p>item 2</p>
              <p>item 3</p>
              <p>item 4</p>
            </div>
          ) : null}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Layout
