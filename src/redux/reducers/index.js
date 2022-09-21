import { combineReducers } from 'redux'
import toggleSidebarReducer from './toggleSidebarReducer'

//combining reducers so I can later destructure states

const reducers = combineReducers({
  isSidebarToggled: toggleSidebarReducer
})

export default reducers
