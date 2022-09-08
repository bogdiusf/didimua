import React from 'react'
import TemplatePage from '../../common/TemplatePage'

const Header = () => (
  <header>
    <h1>My work</h1>
    <div>This page is about the work that I do</div>
  </header>
)

const Main = () => (
  <main>
    <div>
      Insert pictures and text here. Decide whether to use card like styling or
      2n-1 elements with inversed order
    </div>
  </main>
)

const Work = () => {
  return <TemplatePage header={<Header />} main={<Main />} />
}

export default Work
