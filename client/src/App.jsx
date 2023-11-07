import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import Signin from "./pages/Signin"
import Dashboard from './pages/Dashboard'
import PrivateRoute from './components/PrivateRoute'
import Payroll from './pages/Payroll'
import Fee from './pages/Fee'
import Bill from './pages/Bill'
import Purchase from './pages/Purchase'
import Faculty from './pages/salary/Faculty'
import Staff from './pages/salary/Staff'
import MessContractor from './pages/salary/MessContractor'
import Security from './pages/salary/Security'


export default function App() {
  return (
   <BrowserRouter>
    <Routes>
      
      <Route path='/' element = {<Home />} />
      <Route path='/sign-in' element = {<Signin />} />
        <Route element={<PrivateRoute />}>
          <Route path='/profile' element={<Profile />} />
          <Route path='/dashboard' element = {<Dashboard />} />
          <Route path='/salary' element={<Payroll />} />
          <Route path='/fee' element={<Fee />} />
          <Route path='/bills' element={<Bill />} />
          <Route path='/purchase' element={<Purchase />} />
          <Route path='/faculty' element={<Faculty />} />
          <Route path='/staff' element={<Staff />} />
          <Route path='/messcontractor' element={<MessContractor />} />
          <Route path='/security' element={<Security />} />
        </Route>
      
    </Routes>
   </BrowserRouter>
  )
}