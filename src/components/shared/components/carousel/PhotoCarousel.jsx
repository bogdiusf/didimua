import React from 'react'
import { createUseStyles } from 'react-jss'
import CarouselStyles from './Carousel.styles'
import AwesomeSlider from 'react-awesome-slider'
import withAutoplay from 'react-awesome-slider/dist/autoplay'

import 'react-awesome-slider/dist/styles.css'
import 'react-awesome-slider/dist/custom-animations/scale-out-animation.css'

import banner1 from '../../../../assets/carousel/brush-791306_1920.jpg'
import banner2 from '../../../../assets/carousel/eye-shadow-4558443_1920.jpg'
import banner3 from '../../../../assets/carousel/woman-438434_1920.jpg'
import banner4 from '../../../../assets/carousel/woman-5443384_1920.jpg'

const useStyles = createUseStyles(CarouselStyles)

const AutoplaySlider = withAutoplay(AwesomeSlider)

const PhotoCarousel = () => {
  const classes = useStyles()

  return (
    <AutoplaySlider
      className={classes.sliderContainer}
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
  )
}

export default PhotoCarousel
