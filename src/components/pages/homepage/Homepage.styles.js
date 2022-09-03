const HomepageStyles = {
  '@keyframes fadeInAnimation': {
    '0%': {
      opacity: 0
    },
    '100%': {
      opacity: 1
    }
  },
  homepageContainer: ({ isSidebarToggled }) => ({
    transition: 'opacity 0.5s ease-in-out',
    opacity: isSidebarToggled ? 0.3 : 1,
    pointerEvents: isSidebarToggled ? 'none' : 'auto',
    height: 'calc(100vh - 70px)',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',

    '& > *': {
      animation: '$fadeInAnimation ease-in-out 0.5s',
      animationIterationCount: 1,
      animationFillMode: 'forwards',

    },
  }),

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

  homepageBody: {
    height: '100%',
    display: 'flex',
    gap: 50,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }
}

export default HomepageStyles