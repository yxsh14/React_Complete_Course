import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Layout from './layout'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './components/Home/home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import User from './components/User/User'
import Github, { githubInfoLoader } from './components/Github/Github'


// Pahla treeka 
// const router=createBrowserRouter([
//   {
//     path:'/',
//     element: <Layout/>,
//     children:[
//       {
//         path:"",
//         element:<Home/>
//       },
//       {
//         path:"about",
//         element:<About/>
//       },
//       {
//         path:"contactUs",
//         element:<Contact/>
//       }
//     ]

//   }
// ])

// Dusra Tareeka
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
        {/* Nesting yaha bhi hogi */}
        <Route path="" element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="contactUs" element={<Contact/>}/>
        {/* yaha humko params catch karna seekhna hai 
        simple hai route create karo */}
        <Route path="user/:userId" element={<User/>}/>
        {/* ab jis route pr humne ye lagaya hai uski file mai useParam prop k zariye hum id use kar skte hain bs variable ka naam userId hona chahiye */}

        <Route loader={githubInfoLoader} path="github" element={<Github/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/> 
    
  </React.StrictMode>,
)
/* ye ek prop leta hai jisko router bolte hain. Ab router ko create karne k do tareeke hai ek to is file mai ya dusri seperate file mai  */