import React from 'react'
import ReactDOM from "react-dom/client"
import {Main, Navbar, SinglePuppy, AllPuppies, PuppyDaTails} from './components'
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    createRoutesFromElements,
  } from "react-router-dom";


const container = document.getElementById('app')
const root = ReactDOM.createRoot(container)

const router = createBrowserRouter(
      createRoutesFromElements(
        <Route path="/" element={<Navbar/>}>
          <Route path="puppies" element={<Main />}/>
          <Route path="puppy" element={<PuppyDaTails/>}/>
        </Route>
      )
      );
          
          




root.render(<React.StrictMode> 
    <RouterProvider router={router} />
    </React.StrictMode>)