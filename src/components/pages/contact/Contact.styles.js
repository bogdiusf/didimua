export const ContactStyles = {
  headerContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    // alignItems: 'center',
    gap: 50
  },

  paper: {
    width: 400,
    height: 400,
    padding: 40,
  },

  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
  },

  textField: {
    fontFamily: "Maven Pro', sans-serif !important",
    '&::before': {
      borderBottom: '2px solid #1a9790 !important',
    },
    '&::after': {
      borderBottom: '2px solid #fd905f !important',
    }
  },

  submitButton: {
    backgroundColor: '#1a9790 !important',
    '&:hover': {
      backgroundColor: '#fd905f !important',
    }
  }
}