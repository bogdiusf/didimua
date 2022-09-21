import { combineReducers } from 'redux'
import toggleSidebarReducer from './toggleSidebarReducer'
import triggerLoaderBetweenPages from './triggerLoaderBetweenPagesReducer'
import stickyComponentReducer from './stickyComponentReducer'

//combining reducers so I can later destructure states

const reducers = combineReducers({
  isSidebarToggled: toggleSidebarReducer,
  isLoading: triggerLoaderBetweenPages,
  isComponentSticky: stickyComponentReducer
})

export default reducers
