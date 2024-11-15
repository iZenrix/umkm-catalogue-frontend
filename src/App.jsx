import './App.css'
import { RouterProvider } from 'react-router-dom'
import router from '@routers/index'
import { AuthProvider } from './contexts/AuthContext'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
