import React from 'react'
import ReactDOM from "react-dom/client"
import {Main} from './components'
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    createRoutesFromElements,
  } from "react-router-dom";

// const BasicComponentNameHere = () => { 
//     return ( 
//     <div> 
//         <p>Hello World!</p> 
//         </div> 
//         ) 
//     }


const container = document.getElementById('app')
const root = ReactDOM.createRoot(container)

const router = createBrowserRouter(
      createRoutesFromElements(
        <Route path="/" element={<Main />}></Route>
      ))
          
          




root.render(<React.StrictMode> 
    <RouterProvider router={router} />
    </React.StrictMode>)