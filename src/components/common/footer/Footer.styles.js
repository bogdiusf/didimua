const FooterStyles = {
  '@keyframes fadeInAnimation': {
    '0%': {
      opacity: 0
    },
    '100%': {
      opacity: 1
    },
  },

  footerContainer: ({ isFooterVisibile }) => ({
    height: 450,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    top: '100%',
    opacity: isFooterVisibile ? 1 : 0,
    transition: isFooterVisibile ? 'all 750ms ease-in-out' : 'all 500ms ease-in-out'
  }),
  footerQuote: {
    height: 150,
    width: '100%'
  },
  footer: {
    width: '100%',
    height: 300,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fd905f',

  }

}

export default FooterStyles