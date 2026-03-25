import Maincontent from '../assets/components/layout/Maincontent'
import Topbar from '../assets/components/layout/Topbar'

const Dashboard = () => {
  return (
    <>
      <Topbar title='Dashboard' />
      <div className="main-content">
        <Maincontent />
      </div>
    </>
  )
}

export default Dashboard
