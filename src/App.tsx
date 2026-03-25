import Approutes from './routes/Approutes'
import Sidebar from './assets/components/layout/Sidebar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react"
import './App.css'

function App() {

  const [isActive, setIsActive] = useState(false)

  return (
    <div className="app-container">
      


      <section className={isActive ? "main-layout active" : "main-layout"}>
        <Sidebar setIsActive={setIsActive} />
        <Approutes />
      </section>

    </div>
  )
}

export default App
