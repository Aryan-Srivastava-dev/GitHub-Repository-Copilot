import './App.css'
import "flowbite"
import './index.css'
import React from 'react';
import { createRoot } from 'react-dom/client'
import { RouterProvider} from 'react-router-dom';
import Routes from "./router/Routes"


createRoot(document.getElementById('root')).render(
  
  <RouterProvider router={Routes}/>
  
)
