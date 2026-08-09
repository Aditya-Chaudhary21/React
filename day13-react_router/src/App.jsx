import React from 'react'
import NavBar from './components/NavBar'
import AppRoutes from './routes/AppRoutes'

const App = () => {
  return (
    <div className='h-screen p-2 ' >
  <NavBar/>
  <AppRoutes/>
    </div>    
  )
}

export default App
