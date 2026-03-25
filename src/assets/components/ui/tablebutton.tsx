import { Link } from "react-router-dom";
import { ImagePath } from "../../../themes/ImagePath";

interface tablebuttonprops{
    link:string;
}

const tablebutton: React.FC <tablebuttonprops> = ({link}) => {
  return (

    <Link className="table-button" to={link}> <img src={ImagePath.eyeicon} alt="Eye Icon"/> View more</Link>
    
  )
}

export default tablebutton
