import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from './Home/Home'
import { Header } from './Header/Header'

export const Main = () => {
  return (
    <div>
        <Header />
        <Routes>
            <Route path={'/'} element={<Home />}/>
        </Routes>
    </div>
  )
}
