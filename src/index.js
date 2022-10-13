import React from 'react'
import ReactDOM from "react-dom/client"
import {Main} from './components'

// const BasicComponentNameHere = () => { 
//     return ( 
//     <div> 
//         <p>Hello World!</p> 
//         </div> 
//         ) 
//     }


const container = document.getElementById('app')
const root = ReactDOM.createRoot(container)

// root.render(<BasicComponentNameHere />)




root.render(<Main />)