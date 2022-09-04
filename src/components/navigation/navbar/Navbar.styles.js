const NavbarStyles = {
  '@keyframes fadeInAnimation': {
    '0%': {
      opacity: 0
    },
    '100%': {
      opacity: 1
    }
  },
  navbar: ({ isSidebarToggled, isNavSticky }) => ({
    backgroundColor: '#f8f8f8',
    padding: [20, 20],
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    transition: 'opacity 0.5s ease-in-out',
    opacity: isSidebarToggled ? '0.3' : '1 ',
    width: '100%',
    position: 'sticky',
    top: 0,
    boxShadow: isNavSticky ? '0 1px 3px rgb(0 0 0 / 10%), 0 2px 2px rgb(0 0 0 / 6%), 0 0 2px rgb(0 0 0 / 7%)' : 'none',
    zIndex: 1,

    '@media screen and (min-width: 768px)': {
      padding: [20, '7.5%']
    }
  }),

  navLeftSide: {
    animation: '$fadeInAnimation ease-in-out 0.5s',
    animationIterationCount: 1,
    animationFillMode: 'forwards',
    display: 'flex',
    alignItems: 'center',
    padding: 10,
    gap: 10,
    fontSize: 14,
  },

  logoText: {
    display: 'flex',
    flexDirection: 'column',
    textTransform: 'uppercase',
    marginTop: 10
  },

  animatingText: {
    color: '#FD905F',
  },

  brandLogo: {
    width: '4rem',
    filter: 'invert(48%) sepia(13%) saturate(3207%) hue-rotate(130deg) brightness(95%) contrast(80%)',

    '&:hover': {
      cursor: 'pointer'
    }
  },

  navRightSide: {
    animation: '$fadeInAnimation ease-in-out 1s',
    animationIterationCount: 1,
    animationFillMode: 'forwards',
  },

  menuIcon: {
    fontSize: 30,
    marginRight: 10,

    '@media screen and (min-width: 768px)': {
      display: 'none'
    }
  },

  navLinks: {
    display: 'flex',
    gap: 75,
    marginRight: 10,

    '@media screen and (max-width: 768px)': {
      display: 'none'
    }
  }
}

export default NavbarStyles