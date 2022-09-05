const defaultLinkStyles = {

  '@keyframes bounce': {
    '0%, 20% ,50% ,80%, 100%': {
      transform: 'translateX(0)'
    },
    '40%': {
      transform: 'translateX(-5px)'
    },
    '60%': {
      transform: 'translateX(-2.5px)'
    }
  },

  defaultLink: ({ isSidebarToggled }) => ({
    textDecoration: 'none',
    textTransform: 'uppercase',
    cursor: 'pointer',
    color: '#1a9790',
    transition: '0.25s ease-in-out',
    display: 'flex',
    position: 'relative',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 5,
    '&:hover svg:not(:first-child)': {
      animation: '$bounce 1s infinite'
    },


    ...(isSidebarToggled && {
      '& svg': { fontSize: 20, },
      '& svg:not(:first-child)': {

        animation: '$bounce 2s infinite',
      }
    }),

    '@media screen and (min-width: 768px)': {
      '&:hover': {
        color: '#fd905f',
      },
      '&::after': {
        content: '""',
        position: 'absolute',
        width: '100%',
        height: 2,
        bottom: 0,
        left: 0,
        top: 25,
        backgroundColor: '#fd905f',
        transformOrigin: 'bottom left',
        transform: 'scaleX(0)',
        transition: 'transform 0.25s ease-in-out',
        backgroundColor: '#fd905f'
      },
      '&:hover::after': {
        transform: 'scaleX(1)',
        backgroundColor: '#fd905f'
      },
    }
  }),

  focusedLink: {
    '@media screen and (min-width: 768px)': {
      color: '#fd905f',
      '&::after': {
        content: '""',
        position: 'absolute',
        width: '100%',
        transform: 'scaleX(1)',
        height: 2,
        bottom: 0,
        left: 0,
        top: 25,
        backgroundColor: '#fd905f',
        transformOrigin: 'bottom left',
        transition: 'transform 0.25s ease-in-out'
      },
    }
  }
}

export { defaultLinkStyles }