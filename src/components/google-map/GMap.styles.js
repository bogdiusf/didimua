const MapStyles = {
  mapContainer: {
    // margin: [0, 'auto'],
    width: 400,
    height: 400,
    marginBottom: 50,

    '@media screen and (max-width: 500px)': {
      width: '100%',
      height: '100vw'
    },

    '@media screen and (min-width: 501px) and (max-width: 768px)': {
      width: '80%',
      height: '50vh'
    },

    '& .gmnoprint, .gm-style-cc': {
      display: 'none'
    }
  }
}

export { MapStyles }