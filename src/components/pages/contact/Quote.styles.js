export const QuoteStyles = {

  '@keyframes blink': {
    '0%': { opacity: 1 },
    '50%': { opacity: 0.2 },
    '100%': { opacity: 1 }
  },

  quoteContainer: {
    position: 'absolute',
    padding: 20,
    top: 0,
    zIndex: 999,
    height: 150,
    width: '100%',
    backgroundColor: '#232B2B',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#D8D8D8',
    fontFamily: '"DM Sans", sans-serif',
    fontStyle: 'italic',
    '& > em': {
      animation: '$blink 2s infinite alternate ease-in-out'

    }
  }
}