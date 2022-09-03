const NavbarStyles = {
  '@keyframes fadeInAnimation': {
    '0%': {
      opacity: 0
    },
    '100%': {
      opacity: 1
    }
  },
  navbar: ({ isSidebarToggled }) => ({
    padding: [20, 20],
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    transition: 'opacity 0.5s ease-in-out',
    opacity: isSidebarToggled ? '0.3' : '1 ',

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
    '& div:first-child': {
      display: 'flex',
      flexDirection: 'column',
      textTransform: 'uppercase',

      '& span': {
        color: '#FD905F',
      },
    }
  },

  brandLogo: {
    width: '20%',
    filter: 'invert(48%) sepia(13%) saturate(3207%) hue-rotate(130deg) brightness(95%) contrast(80%)',

    '&:hover': {
      cursor: 'pointer'
    }
  },

  navRightSide: {
    animation: '$fadeInAnimation ease-in-out 1s',
    animationIterationCount: 1,
    animationFillMode: 'forwards',
    '& svg': {
      display: 'flex',
      fontSize: 30,
      marginRight: 10,

      '@media screen and (min-width: 768px)': {
        display: 'none'
      }
    },
  },

  links: {
    display: 'flex',
    gap: 75,
    marginRight: 10,

    '& a': {
      textDecoration: 'none',
      textTransform: 'uppercase',
      color: '#1a9790',
      transition: '0.5s ease-in-out',
      display: 'inline-block',
      position: 'relative',

      '&::after': {
        content: '""',
        position: 'absolute',
        width: '100%',
        transform: 'scaleX(0)',
        height: 2,
        bottom: 0,
        left: 0,
        top: 25,
        backgroundColor: '#1a9790',
        transformOrigin: 'bottom left',
        transition: 'transform 0.25s ease-out'
      },

      '&:hover::after, &:focus::after': {
        transform: 'scaleX(1)',
        backgroundColor: '#fd905f'
      },
      '&:hover, &:focus': {
        color: '#fd905f'
      }
    },

    '@media screen and (max-width: 768px)': {
      display: 'none'
    }
  }
}

export default NavbarStyles