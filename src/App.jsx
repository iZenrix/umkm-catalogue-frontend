import './App.css'
import { RouterProvider } from 'react-router-dom'
import router from '@routers/Index'
import { AuthProvider } from './contexts/AuthContext'

function App() {
  return (
    <>
      <div className="App">
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </div>
    </>
  )
}

export default App
