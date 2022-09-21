const triggerLoaderBetweenPagesReducer = (state = false, action) => {
  switch (action.type) {
    case 'TRIGGER_LOADER': {
      return !state
    }
    default: {
      return state
    }
  }
}

export default triggerLoaderBetweenPagesReducer
