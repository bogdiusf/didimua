const HomepageStyles = {
  header: {
    width: '100%'
  },

  sliderContainer: {
    '& .awssld__wrapper': {
      width: '100%',
      height: 500,
      paddingBottom: 0,
      '@media screen and (max-width: 768px)': {
        height: 400
      },
      '@media screen and (max-width: 550px)': {
        height: 300
      },
    },

    '& .awssld__content': {
      zIndex: 9
    },

    '& .awssld__content img': {
      zIndex: -1,
    },
    '& div span': {
      color: 'red',
    }
  },

  images: {
    width: '100%',
  }
}

export { HomepageStyles }