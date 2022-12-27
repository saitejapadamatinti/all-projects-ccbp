import React from 'react'

const ConfigurationContext = React.createContext({
  showContent: true,
  showLeftNavbar: true,
  showRightNavbar: true,
  onToggleShowContent: () => {},
  onToggleShowLeftNavbar: () => {},
  onToggleShowRightNavbar: () => {},
})

export default ConfigurationContext
