interface statusiconprops{
    title:string,
    varient: 'green' | 'red',
}

const statusicon:React.FC<statusiconprops> = ({title , varient}) => {
  return (
    
    <div className={`${varient} statusbaricon`}>
        {title}
    </div>

  )
}

export default statusicon
