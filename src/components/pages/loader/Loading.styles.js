const LoadingStyles = {
  '@keyframes flickerAnimation': {
    '0%': { opacity: 1 },
    '50%': { opacity: 0 },
    '100%': { opacity: 1 }
  },

  loadingContainer: {
    transition: 'opacity 0.5s ease-in-out',
    height: 'calc(100vh - 325px)',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  loadingLogo: {
    padding: 10,
    width: 200,
    filter: 'invert(100%)',
    animation: '$flickerAnimation 1.25s infinite alternate',

    '@media screen and (max-width: 768px)': {
      width: 150
    }
  }
}

export default LoadingStyles