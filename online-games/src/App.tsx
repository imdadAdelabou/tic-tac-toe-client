import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import LandingPage from './views/LandingPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <LandingPage />
    </div>
  )
}

export default App
