import React, { useState, useCallback } from 'react'
import { Context } from './Context'

const ContextProvider = ({ children }) => {
  const [isSidebarToggled, setIsSidebarToggled] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const setIsSidebarToggledCallback = useCallback((value) =>
    setIsSidebarToggled(value)
  )

  const handleSidebar = () => {
    setIsSidebarToggledCallback(!isSidebarToggled)
  }

  const data = {
    isSidebarToggled,
    setIsSidebarToggled,
    handleSidebar,
    isLoading,
    setIsLoading,
    setIsSidebarToggledCallback
  }

  return <Context.Provider value={data}>{children}</Context.Provider>
}

export default ContextProvider
