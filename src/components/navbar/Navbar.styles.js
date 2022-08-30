const NavbarStyles = {
  navbar: ({ isNavbarToggled }) => ({
    boxShadow: '0 1px 3px rgb(0 0 0 / 30%), 0 2px 2px rgb(0 0 0 / 16%), 0 0 2px rgb(0 0 0 / 17%)',
    padding: [0, 20],
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    transition: '250ms ease-in-out',
    opacity: isNavbarToggled ? 0.3 : 1
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
    width: 50
  },

  navRightSide: {
    fontSize: 30,
    marginRight: 10,
  },

  bgLayerWhenToggled: ({ isNavbarToggled }) => ({
    height: '100vh',
    width: '100vw',
    transition: 'all 250ms linear',
    opacity: isNavbarToggled ? 0.3 : 1
  })
}

export default NavbarStyles