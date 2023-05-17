import React from 'react'
import './MainPage.modul.scss'

export const MainPage = () => {
  return (
    <div className='MainPage' id={'MainPage'}>
        <img className={'firstImage'} src="/images/firstPage.svg"/>
        <div className={'mainPageContent'}>
          <div className={'text'}>
            <h1>Буст Аккаунтов CS GO</h1>
            <h2>С нами игра станет лучше!</h2>
            <p>Устали играть с читерами или просто хотите улучшить свою игру? Вы пришли по адресу! Мы предлагаем быстрый и качественный буст кс го аккаунтов, от буста ранга и фейсита, до накрутки похвалы и восстановления Траст Фактора. Сделай заказ и получай удовольствие от игры, с нами</p>
            <a className={'more'}>Подробнее <img src={'/images/arrow.svg'} width={7}/></a>
            <a className={'FAQ'}>Остались вопросы?</a>
          </div>
          <div className={'agent'}>
            <div className={'rings'}>
              <div className={'brightness'}></div>
              <div className={'ring ring1'}></div>
              <div className={'ring ring2'}></div>
              <div className={'ring ring3'}></div>
            </div>
            <img className={'fbi'} src={'/images/fbi.svg'}/>
          </div>
        </div>
        <div className={'endPage'}></div>
    </div>
  )
}
