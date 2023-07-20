import { Route, Routes, useParams, useSearchParams } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./page/Home"
import About from "./page/About"
import ContactUs from "./page/ContactUs"
import Person from "./page/Person"
import NotFound from "./page/NotFound"
import PersonDetail from "./page/PersonDetail"


function App() {
  let {id} = useSearchParams()
  return (
    <div className="text-center fw-bold">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contactus" element={<ContactUs/>}/>
          <Route path="/person" element={<Person/>}/>
          <Route path="*" element={<NotFound/>}/>
          <Route path="/person/:personId" element={<PersonDetail/>}/>
        </Routes>
    </div>
  )
}

export default App
