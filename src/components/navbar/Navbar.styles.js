const NavbarStyles = {
  navbar: ({ isNavbarToggled }) => ({
    boxShadow: '0 1px 3px rgb(0 0 0 / 30%), 0 2px 2px rgb(0 0 0 / 16%), 0 0 2px rgb(0 0 0 / 17%)',
    padding: [0, 20],
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    opacity: isNavbarToggled ? '0.3 !important' : '1 !important',

    '@media screen and (min-width: 768px)': {
      padding: [0, '7.5%']
    }
  }),

  navLeftSide: {
    display: 'flex',
    alignItems: 'center',
    padding: 10,
    '& > div': {
      display: 'flex',
      flexDirection: 'column',
      marginLeft: 10,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      lineClamp: 2,
      width: 100,
      textTransform: 'uppercase',
      fontSize: 12,

      '& > span:first-child': {
        color: '#FD905F',
        fontSize: 14
      },
    }
  },

  brandLogo: {
    width: 50,
    filter: 'invert(48%) sepia(13%) saturate(3207%) hue-rotate(130deg) brightness(95%) contrast(80%)',

    '&:hover': {
      cursor: 'pointer'
    }
  },

  navRightSide: {
    '& svg': {
      display: 'flex',
      fontSize: 30,
      marginRight: 10,

      '@media screen and (min-width: 768px)': {
        display: 'none'
      }
    },
  },

  links: ({ path }) => ({
    display: 'flex',
    gap: 20,
    marginRight: 10,

    '& a': {
      textDecoration: 'none',
      textTransform: 'uppercase',
      color: '#1a9790',
      transition: '0.15s ease-in-out',
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
        transition: 'transform 0.5s ease-out'
      },

      '&:hover::after': {
        transform: 'scaleX(1)',
        backgroundColor: '#fd905f'
      },
      '&:hover, &:focus': {
        color: '#fd905f'
      }
    },
    // '& a:hover': {
    //   color: '#fd905f'
    // },

    '@media screen and (max-width: 768px)': {
      display: 'none'
    }
  })
}

export default NavbarStyles