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
    transition: 'opacity 0.5s ease-in-out',
    opacity: isNavbarToggled ? 0.3 : 1,
    backgroundColor: '#fd905f',
    pointerEvents: isNavbarToggled ? 'none' : 'auto',
    // height: 'calc(100vh - 70px)',
    height: '210vh',
    width: '100%',
    display: 'grid',
    placeItems: 'center',

    '& > *': {
      animation: '$fadeInAnimation ease-in-out 0.5s',
      animationIterationCount: 1,
      animationFillMode: 'forwards',

    }
  })
}

export default HomepageStyles