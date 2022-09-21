import React, { useEffect } from 'react'
import Loading from '../common/loader/Loading'

import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actions } from '../../redux/actions'

const CustomRoute = ({ path, element }) => {
  const isLoading = useSelector((state) => state.isLoading)
  const dispatch = useDispatch()
  const { triggerLoaderBetweenPages } = bindActionCreators(actions, dispatch)

  useEffect(() => {
    triggerLoaderBetweenPages()

    setTimeout(
      () => triggerLoaderBetweenPages(),
      Math.floor(Math.random() * (3000 - 500 + 1) + 500)
    )
  }, [path])

  return isLoading ? <Loading /> : element
}

export default CustomRoute
