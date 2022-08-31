import './App.css'
import Routes from './components/routes/Routes'
import ContextProvider from './components/context/ContextProvider'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <ContextProvider>
        <Routes />
      </ContextProvider>
    </BrowserRouter>
  )
}

export default App
