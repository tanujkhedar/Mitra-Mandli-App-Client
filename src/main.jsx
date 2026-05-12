import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import './styles/index.css'
import './styles/scrollbar.css'
import { router } from './app/Routes.jsx'
import { store } from './app/Store.js'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
      <Toaster position='top-center'/>
      <RouterProvider router={router}/>
    </Provider>
)
