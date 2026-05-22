import Approutes from './routes/Approutes'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react"
import './App.css'

function App() {

  const [isActive] = useState(false)

  return (
    <div className="app-container">
      <section className={isActive ? "main-layout active" : "main-layout"}>
        <Approutes />
      </section>

    </div>
  )
}

export default App
