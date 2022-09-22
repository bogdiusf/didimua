import React, { useEffect } from 'react'
import { createUseStyles } from 'react-jss'
import { HomepageStyles } from './Homepage.styles'
import TemplatePage from '../../common/TemplatePage'
import PhotoCarousel from '../../shared/components/carousel/PhotoCarousel'

import pic1 from '../../../assets/pic1.jpg'

import { motion } from 'framer-motion'
import LeftSlideIn from '../../shared/components/transitions/LeftSlideIn'

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

  return (
    <main>
      <section>
        <LeftSlideIn>
          <img
            alt="test-picture1"
            src={pic1}
            className={mainClasses.imgDefault}
          />
        </LeftSlideIn>
        <img
          alt="test-picture2"
          src={pic1}
          className={mainClasses.imgDefault}
        />
      </section>

      <section>
        <LeftSlideIn>
          <div className={mainClasses.divDefault}>
            Intersection Observer test - static implementation - not optimal at
            all. Problems with calling observer hook with dynamic data, due to
            unresolved element uniqueness problems
          </div>
        </LeftSlideIn>
      </section>
    </main>
  )
}

function Homepage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <TemplatePage header={<Header />} main={<Main />} />
    </motion.div>
  )
}

export default Homepage
