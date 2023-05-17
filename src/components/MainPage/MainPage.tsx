import React from 'react'
import './MainPage.modul.scss'

export const MainPage = () => {
  return (
    <div className='MainPage' id={'MainPage'}>
        <img className={'firstImage'} src="/images/firstPage.svg"/>
        <img className={'fbi'} src={'/images/fbi.svg'}/>
        <div className={'endPage'}></div>
    </div>
  )
}
