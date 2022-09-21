const triggerLoaderBetweenPages = () => {
  return (dispatch) =>
    dispatch({
      type: 'TRIGGER_LOADER'
    })
}

export default triggerLoaderBetweenPages
