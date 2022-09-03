const SidebarStyles = {
  '@keyframes fadeInAnimation': {
    '0%': {
      opacity: 0
    },
    '100%': {
      opacity: 1
    }
  },
  sidebar: ({ isSidebarToggled }) => ({
    display: isSidebarToggled ? 'flex' : 'none',
    flexDirection: 'column',
    gap: 20,
    width: '80%',
    height: '110vh',
    backgroundColor: 'white',
    boxShadow: '0 1px 3px rgb(0 0 0 / 30%), 0 2px 2px rgb(0 0 0 / 16%), 0 0 12px rgb(0 0 0 / 37%)',
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 999,
    animation: '$fadeInAnimation ease-in-out 0.5s',
    animationIterationCount: 1,
    animationFillMode: 'backwards',

    '@media (min-width: 550px)': {
      width: '60%',
    }
  }),

  closeIcon: {
    fontSize: 30,
    margin: [20, 0, 0, 20]
  },

}

export default SidebarStyles