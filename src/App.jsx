
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Register from './Register'
import Attendance from './Attendance'

function App() {
  

  return (
    
    <BrowserRouter>
    <Routes>
      <Route path='/register' element={<Register/>}></Route>
      <Route path='/attendance' element={<Attendance/>}></Route>
    </Routes>
    </BrowserRouter>
      
    
  )
}

export default App
