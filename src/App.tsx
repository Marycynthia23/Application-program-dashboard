import { useState } from 'react'
import SideBar from './SideBar/SideBar'
import Layout from "./Layout/Layout"
import './App.css'
// import {Outlet} from "react-router-dom"
// import Dashboard from './Dashboard/Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className='container'>
      <SideBar />
      <Layout/>
     
     </div>
    </>
  )
}

export default App
