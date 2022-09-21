import React, { useEffect } from 'react'
import { createUseStyles } from 'react-jss'
import { HomepageStyles } from './Homepage.styles'
import TemplatePage from '../../common/TemplatePage'
import PhotoCarousel from '../../shared/components/carousel/PhotoCarousel'

import pic1 from '../../../assets/pic1.jpg'

import { useIntersectionObserverAnimation } from '../../../utils/hooks/useIntersectionObserverAnimation'

const useStyles = createUseStyles(HomepageStyles)

const Header = () => {
  const headerClasses = useStyles()

  return (
    <header className={headerClasses.header}>
      <PhotoCarousel className={headerClasses.header} />
    </header>
  )
}

const Main = () => {
  const mainClasses = useStyles()
  const observer = useIntersectionObserverAnimation()

  useEffect(() => {
    const elements = document.querySelectorAll('#intersection-observer')
    elements.forEach((el) => observer.observe(el))
  }, [])

  return (
    <main>
      <section>
        <img alt="test-picture1" src={pic1} className={mainClasses.imgShow} />
        <img
          alt="test-picture2"
          src={pic1}
          className={mainClasses.imgDefault}
          id="intersection-observer"
        />
      </section>

      <section>
        <div className={mainClasses.divDefault} id="intersection-observer">
          Intersection Observer test - static implementation - not optimal at
          all. Problems with calling observer hook with dynamic data, due to
          unresolved element uniqueness problems
        </div>
      </section>
    </main>
  )
}

function Homepage() {
  return <TemplatePage header={<Header />} main={<Main />} />
}

export default Homepage
