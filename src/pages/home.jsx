import React from 'react'
import { Hero } from '../components/Hero/hero'
// import { ReactComponent as Arrow } from '../assets/img/arrow.svg'
import  bannerbig  from '../assets/img/bannerbig.svg'
import  bannersmal1  from '../assets/img/bannersmal1.svg'
import  bannersmal2  from '../assets/img/bannersmal2.svg'
import  bannersmal3  from '../assets/img/bannersmal3.svg'
import  bannersmal4  from '../assets/img/bannersmal4.svg'
// import flydog from '../assets/img/banner.png'
import '../style/home.css'


export const Home = () => {

  return (
    <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
      {/* <div className='head-banner'>

         <div className='head-banner__left'>
          <h1 className='head-banner__left__title'>Крафтовые лакомства для собак</h1>
           <p className='head-banner__left__subtitle'>Всегда свежие лакомства ручной работы с доставкой по России и Миру</p>
          <button className='head-banner__left__btn'>Каталог <Arrow /></button>
         </div>
        <div className='head-banner__right'>
            <img src={flydog} alt="dogPhoto" />
         </div>
       </div>  */}
      <Hero />
      <div className='banner-group'>

        <div style={{flex:'1', maxWidth: '992px', marginBottom:"40px"}}>
          <img src={bannerbig} alt='banner1' style={{width: "100%"}}/>
        </div>

        <div className='banner-group__small'>
          <img src={bannersmal1} alt='banner1' style={{width: "49%" }}/>
          <img src={bannersmal2} alt='banner1' style={{width: "49%" }}/>
        </div>

        <div className='banner-group__small last-group'>
          <img src={bannersmal3} alt='banner1' style={{width: "49%" }}/>
          <img src={bannersmal4} alt='banner1' style={{width: "49%" }}/>
        </div>

      </div>
    </div>
  )
}
