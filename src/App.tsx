import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import SideBar from "./components/SideBar"
import NavBar from "./components/NavBar"
import MapSection from "./components/MapSection"
function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
   <Route path="/" element={<Home/>}/>
   <Route path="/sidebar" element={<SideBar/>}/>
   <Route path="/navbar" element={<NavBar/>}/>
   <Route path="/mapsection" element={<MapSection/>}/>
    </Routes>
    </BrowserRouter>
     
    </>
  )
}

export default App
