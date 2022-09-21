const HomepageStyles = {
  imgDefault: {
    width: '100%',
    opacity: 0,
    filter: 'blur(5px)',
    transform: 'translateX(-100%)',
    transition: 'all 1s'
  },

  imgShow: {
    width: '100%'
  },

  divDefault: {
    marginTop: 400,
    marginBottom: 200,
    width: '100%',
    height: 500,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: [0, 50],
    color: 'white',
    backgroundColor: 'black',
    opacity: 0,
    filter: 'blur(5px)',
    transform: 'translateX(-100%)',
    transition: 'all 1s'
  }
}

export { HomepageStyles }
