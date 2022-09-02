import React, { useState } from 'react'
import { Context } from './Context'

const ContextProvider = ({ children }) => {
  const [isNavbarToggled, setIsNavbarToggled] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSidebar = () => {
    setIsNavbarToggled(!isNavbarToggled)
  }

  const data = {
    isNavbarToggled,
    setIsNavbarToggled,
    handleSidebar,
    isLoading,
    setIsLoading
  }

  return <Context.Provider value={data}>{children}</Context.Provider>
}

export default ContextProvider
