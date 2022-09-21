const stickyComponentReducer = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_STICKINESS': {
      return action.payload
    }
    default: {
      return state
    }
  }
}

export default stickyComponentReducer
