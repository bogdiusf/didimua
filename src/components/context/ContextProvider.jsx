import React, { useState } from 'react'
import { Context } from './Context'

import { useLocation } from 'react-router-dom'

const ContextProvider = ({ children }) => {
  const [isNavbarToggled, setIsNavbarToggled] = useState(false)

  const currentLocation = useLocation()

  const handleSidebar = () => {
    setIsNavbarToggled(!isNavbarToggled)
  }

  const data = {
    isNavbarToggled,
    setIsNavbarToggled,
    handleSidebar,
    currentLocation
  }

  return <Context.Provider value={data}>{children}</Context.Provider>
}

export default ContextProvider
