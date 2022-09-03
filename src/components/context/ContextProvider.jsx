import React, { useState } from 'react'
import { Context } from './Context'

const ContextProvider = ({ children }) => {
  const [isSidebarToggled, setIsSidebarToggled] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSidebar = () => {
    setIsSidebarToggled(!isSidebarToggled)
  }

  const data = {
    isSidebarToggled,
    setIsSidebarToggled,
    handleSidebar,
    isLoading,
    setIsLoading
  }

  return <Context.Provider value={data}>{children}</Context.Provider>
}

export default ContextProvider
