import React, { useState, useCallback } from 'react'
import { Context } from './Context'

const ContextProvider = ({ children }) => {
  const [isNavbarToggled, setIsNavbarToggled] = useState(false)

  const handleSidebar = () => {
    setIsNavbarToggled(!isNavbarToggled)
  }

  const data = {
    isNavbarToggled,
    setIsNavbarToggled,
    handleSidebar
  }

  return <Context.Provider value={data}>{children}</Context.Provider>
}

export default ContextProvider
