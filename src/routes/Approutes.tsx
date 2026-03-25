import { Route, Routes } from 'react-router-dom'
import Dashboard from '../Pages/Dashboard'
import Deskuser from '../Pages/Deskuser'
import Plans from '../Pages/Plans'
import User from '../Pages/User'
import Addon from '../Pages/Addon'
import Company from '../Pages/Company'


const Approutes = () => {
  return (
     <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/deskuser' element={<Deskuser/>}/>
        <Route path='/plans' element={<Plans/>}/>
        <Route path='/user' element={<User/>}/>
        <Route path='/addon' element={<Addon/>}/>
        <Route path='/company' element={<Company/>}/>
     </Routes>
  )
}

export default Approutes

