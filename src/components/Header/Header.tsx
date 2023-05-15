import React from 'react'
import './Header.modul.scss'

export const Header = () => {
  return (
    <div className={'header'}>
        <img src={'images/Rectangle76.svg'} className='rect' />
        <div className={'logo'}>
            <h3 className={'Boost'}>Boost</h3> <h3 className={'Center'}>Center</h3>
        </div>
        <ul className='links'>
            <li><h4>Главная</h4></li>
            <li><h4>Почему именно мы?</h4></li>
            <li><h4>Контакты</h4></li>
        </ul>
        <a className={'makeOrder'} href={'/order'}>Заказать</a>
    </div>
  )
}
