import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Pages/Login'
import Signup from '../Pages/Signup'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Signup />} />
        <Route path='/login' element={<Login />} />
    </Routes>
  )
}

export default AllRoutes