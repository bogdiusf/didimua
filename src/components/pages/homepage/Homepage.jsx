import React from 'react'
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
  const mainClasses = useStyles()
  return (
    <main>
      <img src={pic1} alt="pic1" className={mainClasses.images} />
      <img src={pic2} alt="pic2" className={mainClasses.images} />
      <img src={pic3} alt="pic3" className={mainClasses.images} />
    </main>
  )
}

function Homepage() {
  return <TemplatePage header={<Header />} main={<Main />} />
}

export default Homepage
