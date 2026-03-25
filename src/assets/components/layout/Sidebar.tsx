import { ImagePath } from '../../../themes/ImagePath'
import Sidebarbutton from '../ui/sidebarbutton'
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft'
import React from "react"

interface SidebarProps {
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>
}

const Sidebar: React.FC<SidebarProps> = ({ setIsActive }) => {

  return (
    <div className="sidebar">
      
      <div className="toggle-button-wrap">
        <button 
          onClick={() => setIsActive(prev => !prev)} 
          className="toggle-button"
        >
          <ArrowLeftIcon />
        </button>
      </div>

      <div className="logo-wrap">
        <img src={ImagePath.logo} alt="Logo" />
      </div>

      <div className="sidebar-menu">
        <ul>
          <li>
            <Sidebarbutton
              link='/'
              title='Dashboard'
              icon={ImagePath.sidebaricon1}
            />
          </li>

          <li>
            <Sidebarbutton
              link='/user'
              title='Users'
              icon={ImagePath.sidebaricon2}
            />
          </li>

          <li>
            <Sidebarbutton
              link='/deskuser'
              title='Desk Users'
              icon={ImagePath.sidebaricon3}
            />
          </li>

          <li>
            <Sidebarbutton
              link='/company'
              title='Company'
              icon={ImagePath.sidebaricon4}
            />
          </li>

          <li>
            <Sidebarbutton
              link='/plans'
              title='Plans'
              icon={ImagePath.sidebaricon5}
            />
          </li>

          <li>
            <Sidebarbutton
              link='/addon'
              title='Add-Ons'
              icon={ImagePath.sidebaricon6}
            />
          </li>
        </ul>

        <div className="logoutbutton"></div>
      </div>

    </div>
  )
}

export default Sidebar
