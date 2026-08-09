import React from 'react'
import NavBar from './components/NavBar'
import AppRouter from './routers/AppRouter'


const App = () => {
  return (
    <div className="h-screen p-2 flex flex-col gap-3">
      <NavBar/>
      <AppRouter/>
      
    </div>
  )
}

export default App
