import React, { useRef, useState } from 'react'
import { createUseStyles } from 'react-jss'
import { HomepageStyles } from './Homepage.styles'

import AwesomeSlider from 'react-awesome-slider'
import 'react-awesome-slider/dist/styles.css'
import 'react-awesome-slider/dist/custom-animations/scale-out-animation.css'
import withAutoplay from 'react-awesome-slider/dist/autoplay'

import banner1 from '../../../assets/carousel/brush-791306_1920.jpg'
import banner2 from '../../../assets/carousel/eye-shadow-4558443_1920.jpg'
import banner3 from '../../../assets/carousel/woman-438434_1920.jpg'
import banner4 from '../../../assets/carousel/woman-5443384_1920.jpg'

import pic1 from '../../../assets/pic1.jpg'
import pic2 from '../../../assets/pic2.jpg'
import pic3 from '../../../assets/pic3.jpg'

import { useIntersectionObserverAnimation } from '../../../utils/hooks/useIntersectionObserverAnimation'

import TemplatePage from '../../common/TemplatePage'

const AutoplaySlider = withAutoplay(AwesomeSlider)
const useStyles = createUseStyles(HomepageStyles)

const Header = () => {
  const headerClasses = useStyles()

  return (
    <header className={headerClasses.header}>
      <AutoplaySlider
        className={headerClasses.sliderContainer}
        play={true}
        cancelOnInteraction={false}
        interval={5000}
        bullets={false}
        mobileTouch={true}
        organicArrows={false}
        animation="scaleOutAnimation"
        buttons={false}
      >
        <div data-src={banner1} data-attr="banner-image"></div>
        <div data-src={banner2} data-attr="banner-image"></div>
        <div data-src={banner3} data-attr="banner-image"></div>
        <div data-src={banner4} data-attr="banner-image"></div>
      </AutoplaySlider>
    </header>
  )
}

const Main = () => {
  const [isImgVisibile, setIsImgVisibile] = useState(false)
  const [isDivVisibile, setIsDivVisibile] = useState(false)

  const imgRef = useRef()
  const penisRef = useRef()

  useIntersectionObserverAnimation(setIsImgVisibile, [imgRef], 0.3)
  useIntersectionObserverAnimation(setIsDivVisibile, [penisRef], 0.7)

  const mainClasses = useStyles()

  return (
    <main>
      <section>
        <img
          alt="test-picture"
          src={pic1}
          ref={imgRef}
          className={`${mainClasses.imgDefault} ${
            isImgVisibile ? mainClasses.imgShow : ''
          }`}
        />
      </section>

      <section>
        <div
          ref={penisRef}
          className={`${mainClasses.divDefault} ${
            isDivVisibile ? mainClasses.divShow : ''
          }`}
        >
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
