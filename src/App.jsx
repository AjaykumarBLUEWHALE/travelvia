
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Navbar from './components/Navbar';
import LogIn from './pages/LogIn';
import Destination from './pages/Destination';
import Hotel from './pages/Hotel';
import Partner from './pages/Partner';
import Seek from './pages/Seek';
import SignUp from './pages/Sign-up';

function App() {


  return (
    <>
<Router className="App overflow-hidden">
   <Navbar /> 

      <Routes>
         <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
             <Route path="/destinations" element={<Destination/>} />
                  <Route path="/hotel" element={<Hotel />} />
                       <Route path="/partnership" element={<Partner/>} />
                         <Route path="/Search" element={<Seek/>} />
                           <Route path="/login" element={<LogIn/>} />
                           <Route path="/sign-up" element={<SignUp/>} />
      </Routes>
    </Router>

    </>
  )
}

export default App
