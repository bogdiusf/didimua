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
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    minHeight: 'calc(100vh - 325px)',
    padding: [50, 0],

    '& > *': {
      animation: '$fadeInAnimation ease-in-out 0.5s',
      animationIterationCount: 1,
      animationFillMode: 'forwards',
    },
  })
}

export { PageContainerStyles }