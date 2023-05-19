import React from 'react'
import './Home.modul.scss'
import { ScrollBar } from '../ScrollBar/ScrollBar'
import { MainPage } from '../MainPage/MainPage'
import {ReasonsToCooperate} from '../ReasonsToCooperate/ReasonsToCooperate'

export const Home = () => {
  return (
    <div className={'main'}>
        <ScrollBar />
        <MainPage />
        <ReasonsToCooperate />
    </div>
  )
}
