const HeaderStyles = {
  '@keyframes fadeInAnimation': {
    '0%': {
      opacity: 0
    },
    '100%': {
      opacity: 1
    }
  },
  headerContainer: ({ isNavbarToggled }) => ({
    marginTop: 50,

    textTransform: 'uppercase',
    textDecoration: 'underline',
    transition: 'opacity 0.5s ease-in-out',
    opacity: isNavbarToggled ? 0.3 : 1,
    pointerEvents: isNavbarToggled ? 'none' : 'auto',

    '& > *': {
      animation: '$fadeInAnimation ease-in-out 0.5s',
      animationIterationCount: 1,
      animationFillMode: 'forwards',
      height: 200,
      width: '100%',
      backgroundColor: '#1a9790',
      display: 'grid',
      placeItems: 'center',
    }
  })

}

export default HeaderStyles