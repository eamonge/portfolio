import { useState } from 'react'
import './App.css'
import AppRoutes from './Routes'
import { AuthContextProvider } from './components/context/AuthContextProvider'
// import AuthContextProvider from './components/context/AuthContextProvider'

function App() {

  return (
    <>
      <AuthContextProvider>
        <AppRoutes />
      </AuthContextProvider>
    </>
  )
}

export default App
