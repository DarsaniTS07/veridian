import React from 'react'
import { useRoutes } from 'react-router-dom'
import LandingPage from '../pages/LandingPage/LandingPage.jsx'

const Routes = () => {
    const routes =useRoutes([ 
        {
        path:'/',
        element:<LandingPage/>
    },
    {
        path:'*',
        element:<h2>404 - Not Found</h2>
    }
])
return(
    <>
    {routes}
    </>
)
}

export default Routes