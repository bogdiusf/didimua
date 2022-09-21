const triggerComponentStickiness = (value) => {
  return (dispatch) =>
    dispatch({
      type: 'TOGGLE_STICKINESS',
      payload: value
    })
}

export default triggerComponentStickiness
