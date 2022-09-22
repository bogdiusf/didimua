import React from 'react'
import TemplatePage from '../../common/TemplatePage'

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
