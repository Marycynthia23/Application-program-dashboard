import "../SideBar/SideBar.css"
import { GiHamburgerMenu } from 'react-icons/gi';
import home from "../assets/homeicon.png"
import listicon from "../assets/listicon.png"
const SideBar = () => {
  return (
    <div className="sideCont">
      <div className='navLinks'>
            <li>
              <a href={`/dashboard`}><GiHamburgerMenu/></a>
            </li>
            <li>
              <a href={`/dashboard`}>
                <img
              src={home}
              /></a>
            </li>
            <li>
              <a href={`/dashboard`}>
                <img src={listicon}/>
              </a>
            </li>
            
          </div>
          <div >
            <div className='blueNacCircle'>Nl</div>
          </div>
    </div>
  )
}

export default SideBar
