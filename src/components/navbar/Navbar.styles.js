const NavbarStyles = {
  navbar: {
    backgroundColor: '#DFCCCC',
    boxShadow: '0 1px 3px rgb(0 0 0 / 30%), 0 2px 2px rgb(0 0 0 / 16%), 0 0 2px rgb(0 0 0 / 17%)',
    padding: [0, 10],
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  navLeftSide: {
    display: 'flex',
    alignItems: 'center',

    '& > span': {
      marginLeft: 5,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      display: '-webkit-box',
      lineClamp: 2,
      width: 100,
      textTransform: 'uppercase',
      fontSize: 14
    }
  },

  brandLogo: {
    width: 80
  },

  navRightSide: {
    display: 'flex',
    flexDirection: 'column',
    marginRight: 10,
    gap: 5,
    '& span': {
      width: 20,
      height: 2,
      border: '1px solid #591717'
    }
  }
}

export default NavbarStyles