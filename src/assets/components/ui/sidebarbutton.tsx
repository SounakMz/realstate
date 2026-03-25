import { Link, NavLink } from "react-router-dom";

interface sidebarbuttonprops{
    title:string;
    icon:string;
    link:string
}

const sidebarbutton:React.FC<sidebarbuttonprops> = ({title , icon , link}) => {
  return (
    <div>
      
      <div className="sidebarbutton">
        <NavLink to={link}
         className={({ isActive}) =>
         isActive ? "active" : ""
        }
        >
        {title}
        <img src={icon} alt="" />
        </NavLink>
      </div>
      

    </div>
  )
}

export default sidebarbutton
