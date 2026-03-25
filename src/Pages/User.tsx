import Topbar from '../assets/components/layout/Topbar'
import Userinfo from '../assets/components/layout/usercontent'

const User = () => {
  return (
    <>
      <Topbar title='Users' />
      <div className="main-content">
        <Userinfo />
      </div>
    </>
  )
}

export default User
