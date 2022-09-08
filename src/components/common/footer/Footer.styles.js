const FooterStyles = {
  '@keyframes fadeInAnimation': {
    '0%': {
      opacity: 0
    },
    '100%': {
      opacity: 1
    }
  },

  footerContainer: ({ isFooterVisible }) => ({
    height: 450,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    top: '100%',
    ...(isFooterVisible && {
      animation: '$fadeInAnimation ease-in-out 1s',
      animationIterationCount: 1,
      animationFillMode: 'forwards'
    })

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