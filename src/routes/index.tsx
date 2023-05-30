import React from 'react'
import { Route, Routes } from "react-router-dom"
import Inventory from '../components/Inventory'

const SecureRoutes = () => {
    return (
        <Routes>
            <Route path="/products" element={<Inventory />} />
        </Routes>


    )
}

export default SecureRoutes
