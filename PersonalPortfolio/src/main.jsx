import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { Root } from './routes/Root.jsx'
import { About } from './routes/About.jsx'
import { Contacts } from './routes/Contacts.jsx'
import { Projects } from './routes/Projects.jsx'

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
    { path: "/", element: <Root />},
    { path: "/about", element: <About />},
    { path: "/contacts", element: <Contacts />},
    { path: "/projects", element: <Projects />},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
