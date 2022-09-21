import { combineReducers } from 'redux'
import toggleSidebarReducer from './toggleSidebarReducer'
import triggerLoaderBetweenPages from './triggerLoaderBetweenPagesReducer'

//combining reducers so I can later destructure states

const reducers = combineReducers({
  isSidebarToggled: toggleSidebarReducer,
  isLoading: triggerLoaderBetweenPages
})

export default reducers
