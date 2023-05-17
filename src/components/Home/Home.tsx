import React from 'react'
import './Home.modul.scss'
import { ScrollBar } from '../ScrollBar/ScrollBar'
import { MainPage } from '../MainPage/MainPage'

export const Home = () => {
  return (
    <div className={'main'}>
        <ScrollBar />
        <MainPage />
    </div>
  )
}
