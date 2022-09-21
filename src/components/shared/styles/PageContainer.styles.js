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
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 20,
    minHeight: '200vh',
    '& main, header': { width: '100%' },

    '& header, main': {
      animation: '$fadeInAnimation ease-in-out 0.5s',
      animationIterationCount: 1,
      animationFillMode: 'forwards'
    }
  }),
  scrollYProgress: {
    position: 'sticky',
    top: 119,
    zIndex: 9,
    height: 5,
    background: '#fd905f',
    transformOrigin: '0%'
  }
}

export { PageContainerStyles }
