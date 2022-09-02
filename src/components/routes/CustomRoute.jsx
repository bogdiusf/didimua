import React, { useContext, useEffect } from 'react'
import { Context } from '../context/Context'
import Loading from '../pages/is-loading/Loading'
import { Navigate } from 'react-router-dom'

const CustomRoute = ({ path, element }) => {
  const { isLoading, setIsLoading } = useContext(Context)

  useEffect(() => {
    setIsLoading(true)

    setTimeout(
      () => setIsLoading(false),
      Math.floor(Math.random() * (3000 - 100 + 1) + 100)
    )
  }, [path])

  return isLoading ? <Loading /> : element
}

export default CustomRoute
