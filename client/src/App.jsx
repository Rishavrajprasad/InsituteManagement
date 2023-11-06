import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import Signin from "./pages/Signin"
import Dashboard from './pages/Dashboard'

export default function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element = {<Home />} />
      <Route path='/sign-in' element = {<Signin />} />
      <Route path='/profile' element = {<Profile />} />
      <Route path='/dashboard' element = {<Dashboard />} />
    </Routes>
   </BrowserRouter>
  )
}