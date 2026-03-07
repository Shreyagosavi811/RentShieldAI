import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RentShieldDashboard from './components/Rentshielddashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RentShieldDashboard/>
    </>
  )
}

export default App
