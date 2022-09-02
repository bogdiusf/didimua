const HomepageStyles = {
  '@keyframes fadeInAnimation': {
    '0%': {
      opacity: 0
    },
    '100%': {
      opacity: 1
    }
  },
  homepageContainer: ({ isNavbarToggled }) => ({
    marginTop: 50,
    transition: 'opacity 0.5s ease-in-out',
    opacity: isNavbarToggled ? 0.3 : 1,
    pointerEvents: isNavbarToggled ? 'none' : 'auto',
    height: 'calc(100vh - 70px)',
    width: '100%',

    '& > *': {
      animation: '$fadeInAnimation ease-in-out 0.5s',
      animationIterationCount: 1,
      animationFillMode: 'forwards',

    },
  }),

  sliderContainer: {
    '& .awssld__container': {
      paddingBottom: 0,
      height: 400
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
  }
}

export default HomepageStyles