const toggleSidebar = () => {
  return (dispatch) =>
    dispatch({
      type: 'TOGGLE_SIDEBAR'
    })
}

export default toggleSidebar
