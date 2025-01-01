import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './components/Layout'
import Home from './components/Home'
import ProjectList from './components/ProjectList'
import InvalidURL from './components/InvalidURL'
import Description from './components/Description'
import './app.css'

const App = () => {
  return (
    <React.Fragment>
        <RouterProvider router={routing}/>
    </React.Fragment>
  )
}

export default App

let routing = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/projects',
                element: <ProjectList />
            },
            {
                path: '/description/:id',
                element: <Description />
            },
            {
                path: '*',
                element: <InvalidURL />
            }
        ]
    }
])