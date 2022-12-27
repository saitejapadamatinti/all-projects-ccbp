import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const ConfigurationController = props => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value
      const contentBoxChange = () => {
        onToggleShowContent()
      }
      const leftBoxChange = event => {
        onToggleShowLeftNavbar(event.target.value)
      }
      const rightBoxChange = event => {
        onToggleShowRightNavbar(event.target.value)
      }
      return (
        <>
          <div className="configur-div">
            <h1>Layout</h1>
            <input
              value={showContent}
              onChange={contentBoxChange}
              defaultChecked
              id="content"
              type="checkbox"
            />
            <label htmlFor="content">Content</label> <br />
            <input
              value={showLeftNavbar}
              onChange={leftBoxChange}
              defaultChecked
              id="Left Navbar"
              type="checkbox"
            />
            <label htmlFor="Left Navbar">Left Navbar</label> <br />
            <input
              value={showRightNavbar}
              onChange={rightBoxChange}
              defaultChecked
              id="Right Navbar"
              type="checkbox"
            />
            <label htmlFor="Right Navbar">Right Navbar</label> <br />
          </div>
        </>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
