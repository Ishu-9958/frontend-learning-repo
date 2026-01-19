import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from './pages/Home.jsx'
import { About } from './pages/About.jsx'
import { Dashboard } from './pages/Dashboard.jsx'
import { User } from './pages/User.jsx'

const router= createBrowserRouter([

  {
    path:'/',
    element: <App/>,
    children:[
      {
        path:'',
        element:<Home></Home>
      }
      ,{
        path:'about',
        element:<About></About>
      }
      ,{
        path:'dashboard',
        element:<Dashboard></Dashboard>
      }
      ,{
        path:'user/:id',
        element:<User></User>
      }
    ]
  }

  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <RouterProvider router={router}/>

  </StrictMode>,
)
