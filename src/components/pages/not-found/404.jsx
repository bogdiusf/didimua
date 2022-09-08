import React from 'react'
import TemplatePage from '../../common/TemplatePage'
import _404Styles from './404.styles'

const Header = () => (
  <header>
    <h1>404</h1>
    <div>Page not found - check url</div>
  </header>
)

const _404 = () => {
  return <TemplatePage header={<Header />} />
}

export default _404
