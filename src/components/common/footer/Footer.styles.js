const FooterStyles = {
  '@keyframes fadeInAnimation': {
    '0%': {
      opacity: 0
    },
    '100%': {
      opacity: 1
    },
  },

  footerContainer: {
    height: 450,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    top: '100%',
    opacity: 0,
    filter: 'blur(5px)',
    transform: 'translateX(-100%)',
    transition: 'all 1s'
  },
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