import { Route, Routes } from 'react-router-dom'
import MainLayout from '../assets/components/layout/MainLayout'
import ProtectedRoute from '../assets/components/layout/ProtectedRoutes'
import Dashboard from '../Pages/Dashboard'
import Deskuser from '../Pages/Deskuser'
import Plans from '../Pages/Plans'
import User from '../Pages/User'
import Addon from '../Pages/Addon'
import Company from '../Pages/Company'
import Login from '../Pages/login'


const Approutes = () => {

     const isAuthenticated = !!localStorage.getItem("token");

  return (
     <Routes>
        <Route path='/' element={<Login/>}/>
        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
        <Route element={<MainLayout/>}>
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/deskuser' element={<Deskuser/>}/>
            <Route path='/plans' element={<Plans/>}/>
            <Route path='/user' element={<User/>}/>
            <Route path='/addon' element={<Addon/>}/>
            <Route path='/company' element={<Company/>}/>
        </Route>
      </Route>
     </Routes>
  )
}

export default Approutes

