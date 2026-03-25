interface buttonprops {
    title:string;
}

const Button: React.FC<buttonprops> = ({title}) => {
  return (
      <button className="btn">{title}</button>
  )
}

export default Button
