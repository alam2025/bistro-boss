import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/Router.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='  md:w-[85%] mx-auto'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  </React.StrictMode>,
)