import {  StrictMode,  } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {  createBrowserRouter, RouterProvider } from "react-router";
import Errorpage from './components/Errorpage/Errorpage';
import Root from './components/Root/Root.jsx';
import JobFAQ from './components/JobFAQ/JobFAQ.jsx';
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Appliedjobs from './components/Appliedjobs/Appliedjobs.jsx';



const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement:<Errorpage></Errorpage>,
    children : [
      {
        path: '/',
        
        element: <Home></Home>
      },
      {
        path: '/about',
        element:<About></About>
      },
     {
        path: '/job/:id',
        element: <JobFAQ></JobFAQ>,
        loader:()=>fetch('/jobs.json')
      },
     
      {
        path:'/appliedjobs',
        element:<Appliedjobs></Appliedjobs>,
        loader:()=>fetch('/jobs.json')
      }
      
     
    ]
  }
 
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
    
  </StrictMode>,
 
)

