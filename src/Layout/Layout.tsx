import "./Layout.css"
import {Outlet} from "react-router-dom"
import "../Layout/Layout.css"
import Dashboard from "../Dashboard/Dashboard"

const Layout = () => {
  return (
    <div className='layoutCont'>
      <Outlet/>
      <div className="headertop"></div>
      <div className="header">
        <li className="notactive"><a>Program Details</a></li>
        <li className="active"><a>Application form </a></li>
        <div className="triangle"></div>
        <li className="notactive bl"><a>Workflow</a></li>
        <li className="notactive "><a>Preview</a></li>

      </div>
      <Dashboard/>
    </div>
  )
}

export default Layout