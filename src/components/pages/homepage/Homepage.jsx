import React, { useContext } from 'react'
import { Context } from '../../context/Context'
import { createUseStyles } from 'react-jss'
import HomepageStyles from './Homepage.styles'

import AwesomeSlider from 'react-awesome-slider'
import 'react-awesome-slider/dist/styles.css'
import 'react-awesome-slider/dist/custom-animations/cube-animation.css'
import withAutoplay from 'react-awesome-slider/dist/autoplay'

import banner1 from '../../../assets/carousel/brush-791306_1920.jpg'
import banner2 from '../../../assets/carousel/eye-shadow-4558443_1920.jpg'
import banner3 from '../../../assets/carousel/woman-438434_1920.jpg'
import banner4 from '../../../assets/carousel/woman-5443384_1920.jpg'

const AutoplaySlider = withAutoplay(AwesomeSlider)

const useStyles = createUseStyles(HomepageStyles)

function Homepage() {
  const { isNavbarToggled } = useContext(Context)

  const classes = useStyles({ isNavbarToggled })

  return (
    <div className={classes.homepageContainer}>
      <AutoplaySlider
        play={true}
        cancelOnInteraction={false}
        interval={5000}
        bullets={false}
        mobileTouch={true}
        organicArrows={true}
        animation="cubeAnimation"
        className={classes.sliderContainer}
      >
        <div data-src={banner1} data-attr="banner-image">
          <span>1</span>
        </div>
        <div data-src={banner2} data-attr="banner-image">
          <span>2</span>
        </div>
        <div data-src={banner3} data-attr="banner-image">
          <span>3</span>
        </div>
        <div data-src={banner4} data-attr="banner-image">
          <span>4</span>
        </div>
      </AutoplaySlider>
    </div>
  )
}

export default Homepage
