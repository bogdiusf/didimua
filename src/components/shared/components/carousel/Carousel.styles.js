const CarouselStyles = {
  sliderContainer: {
    '& .awssld__wrapper': {
      width: '100vw',
      height: 500,
      paddingBottom: 0,
      '@media screen and (max-width: 768px)': {
        height: 400
      },
      '@media screen and (max-width: 550px)': {
        height: 300
      }
    }
  }
}

export default CarouselStyles
