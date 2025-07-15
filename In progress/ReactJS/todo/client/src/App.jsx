import { useState } from 'react'
import './App.css'
import AppRoutes from './Routes'
import { AuthContextProvider } from './components/context/AuthContextProvider'
// import AuthContextProvider from './components/context/AuthContextProvider'
import { DataContextProvider } from './components/context/DataContextProvider'

function App() {

  return (
    <>
          {/* <AppRoutes /> */}
      <AuthContextProvider>
        <DataContextProvider>
          <AppRoutes />
        </DataContextProvider>
      </AuthContextProvider>
    </>
  )
}

export default App
