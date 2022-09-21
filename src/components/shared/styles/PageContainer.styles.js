const PageContainerStyles = {
  '@keyframes fadeInAnimation': {
    '0%': {
      opacity: 0
    },
    '100%': {
      opacity: 1
    }
  },
  pageContainer: ({ isSidebarToggled }) => ({
    transition: 'opacity 0.5s ease-in-out',
    opacity: isSidebarToggled ? 0.3 : 1,
    pointerEvents: isSidebarToggled ? 'none' : 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 20,
    minHeight: '200vh',
    width: '80%',
    margin: [0, 'auto'],

    '@media screen and (max-width: 500px)': {
      width: '100%'
    },

    '& header, main': {
      animation: '$fadeInAnimation ease-in-out 0.5s',
      animationIterationCount: 1,
      animationFillMode: 'forwards'
    }
  }),
  scrollYProgress: {
    position: 'sticky',
    width: '100vw',
    top: 122,
    zIndex: 9,
    height: 5,
    background: '#fd905f',
    transformOrigin: '0%',

    '@media screen and (max-width: 768px)': {
      top: 0,
      height: 7.5
    }
  },
  floatingButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
    textAlign: 'center',
    right: 50,
    top: '90%',
    zIndex: 999,
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: '#1a9790',
    cursor: 'pointer',
    color: 'white',
    fontSize: 20
  }
}

export { PageContainerStyles }
