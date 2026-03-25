interface topcardprops{
    icon:string;
    title:string;
    description:string;
}

const topcard:React.FC<topcardprops> = ({icon , title , description}) => {
  return (
        <div className="top-card">
            <img src={icon} alt="topbar icon" />
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
  )
}

export default topcard
