import React, { useContext } from 'react'
import { Context } from '../../context/Context'
import { createUseStyles } from 'react-jss'
import HomepageStyles from './Homepage.styles'

import AwesomeSlider from 'react-awesome-slider'
import 'react-awesome-slider/dist/styles.css'
import 'react-awesome-slider/dist/custom-animations/scale-out-animation.css'
import withAutoplay from 'react-awesome-slider/dist/autoplay'

import banner1 from '../../../assets/carousel/brush-791306_1920.jpg'
import banner2 from '../../../assets/carousel/eye-shadow-4558443_1920.jpg'
import banner3 from '../../../assets/carousel/woman-438434_1920.jpg'
import banner4 from '../../../assets/carousel/woman-5443384_1920.jpg'

const AutoplaySlider = withAutoplay(AwesomeSlider)

const useStyles = createUseStyles(HomepageStyles)

function Homepage() {
  const { isSidebarToggled } = useContext(Context)

  const classes = useStyles({ isSidebarToggled })

  return (
    <div className={classes.homepageContainer}>
      <header>
        <AutoplaySlider
          play={true}
          cancelOnInteraction={false}
          interval={5000}
          bullets={false}
          mobileTouch={true}
          organicArrows={false}
          animation="scaleOutAnimation"
          className={classes.sliderContainer}
          buttons={false}
        >
          <div data-src={banner1} data-attr="banner-image"></div>
          <div data-src={banner2} data-attr="banner-image"></div>
          <div data-src={banner3} data-attr="banner-image"></div>
          <div data-src={banner4} data-attr="banner-image"></div>
        </AutoplaySlider>
      </header>
      <section>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </section>
    </div>
  )
}

export default Homepage
