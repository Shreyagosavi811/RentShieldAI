import { useState } from 'react'
import './App.css'

import CustomeRoutes from './routes/CustomeRoutes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <CustomeRoutes/>
    </div>
    </>
  )
}

export default App
