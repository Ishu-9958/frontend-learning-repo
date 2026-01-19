
import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
// import { Home } from './pages/Home'

function App() {


  return (
    <>
    <div className="container">
      <Navbar></Navbar>
      <Outlet/>
      <Footer></Footer>
    </div>
    </>
  )
}

export default App
