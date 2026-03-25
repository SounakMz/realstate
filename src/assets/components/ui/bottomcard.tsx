import type React from "react";

interface bottomcardprops{
    amount:React.ReactNode;
    description:string;
}

const bottomcard:React.FC<bottomcardprops> = ({amount , description}) => {
  return (
    <div className="bottomcard-wrap">
        <p>{description}</p>
        <h3>{amount}</h3>
    </div>
  )
}

export default bottomcard
