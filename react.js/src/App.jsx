import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from '../Component/Navbar'
import './App.css'
import About from '../about/About'
function App() {
  return (
    <>
     
     <BrowserRouter>
     <Routes>
      <route path="/" element={<About/>}></route>
     </Routes>
     </BrowserRouter>
     <Navbar/>
      
    </>
  )
}

export default App
