import Topbar from '../assets/components/layout/Topbar'
import Deskuser from '../assets/components/layout/deskuser'

const DeskUserPage = () => {
  return (
    <>
      <Topbar title='Desk Users' />
      <div className="main-content">
        <Deskuser />
      </div>
    </>
  )
}

export default DeskUserPage

