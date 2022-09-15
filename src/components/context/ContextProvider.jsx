import React, { useState, useCallback } from 'react'
import { Context } from './Context'

const ContextProvider = ({ children }) => {
  const [isSidebarToggled, setIsSidebarToggled] = useState(false)
  const [isElementVisible, setIsElementVisible] = useState()
  const [isLoading, setIsLoading] = useState(false)

  const setIsSidebarToggledCallback = useCallback((value) =>
    setIsSidebarToggled(value)
  )

  const handleSidebar = async () => {
    try {
      await setIsSidebarToggledCallback(!isSidebarToggled)
    } catch (err) {
      console.error(err)
    }
  }

  const data = {
    isSidebarToggled,
    setIsSidebarToggled,
    handleSidebar,
    isLoading,
    setIsLoading,
    isElementVisible,
    setIsElementVisible
  }

  return <Context.Provider value={data}>{children}</Context.Provider>
}

export default ContextProvider
