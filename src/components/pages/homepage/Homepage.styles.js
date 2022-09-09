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

  imgDefault: {
    width: '100%',
    opacity: 0,
    transition: 'all 500ms ease-in-out'
  },

  imgShow: {
    opacity: 1,
    transition: 'all 750ms ease-in-out'
  },

  divDefault: {
    marginTop: 400,
    marginBottom: 200,
    width: '100%',
    height: 500,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: [0, 50],
    color: 'white',
    backgroundColor: 'black',
    opacity: 0,
    transition: 'all 500ms ease-in-out'
  },
  divShow: {
    opacity: 1,
    transition: 'all 750ms ease-in-out'
  }
}

export { HomepageStyles }