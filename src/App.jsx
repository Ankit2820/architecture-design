import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
import Aboutus from "./components/Aboutus";
import Home from "./components/Home";
import Navbar from "./components/Navbar"
import Service from "./components/Service"
import Portfolio from "./components/Portfolio";
function App() {
  return (
    <>
   {/* <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/services" element={<Service/>}/>
        <Route path="/portfolio" element={<Portfolio/>}/>
      </Routes>
    </Router> */}
    <Navbar />
      <Home />
    </>
  )
}

export default App
