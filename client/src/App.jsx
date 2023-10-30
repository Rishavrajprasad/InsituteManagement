import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import Signin from "./pages/Signin"

export default function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element = {<Home />} />
      <Route path='/sign-in' element = {<Signin />} />
      <Route path='/profile' element = {<Profile />} />
    </Routes>
   </BrowserRouter>
  )
}
