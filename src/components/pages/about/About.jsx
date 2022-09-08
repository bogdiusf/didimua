import React from 'react'
import TemplatePage from '../../common/TemplatePage'

const Header = () => (
  <header>
    <h1>About</h1>
    <div>This page is about myself</div>
  </header>
)

const Main = () => (
  <main>
    <div>Insert pictures here</div>
  </main>
)

const About = () => {
  return <TemplatePage header={<Header />} main={<Main />} />
}

export default About
