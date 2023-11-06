import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import Signin from "./pages/Signin"
import Dashboard from './pages/Dashboard'
import PrivateRoute from './components/PrivateRoute'


export default function App() {
  return (
   <BrowserRouter>
    <Routes>
      
      <Route path='/' element = {<Home />} />
      <Route path='/sign-in' element = {<Signin />} />
        <Route element={<PrivateRoute />}>
          <Route path='/profile' element={<Profile />} />
          <Route path='/dashboard' element = {<Dashboard />} />
        </Route>
      
    </Routes>
   </BrowserRouter>
  )
}