import React from 'react'
import { useGetWindowWidth } from '../../hooks/useGetWindowWith'
import Container from '../container'
import cls from "./flytime.module.scss"

export default function FlyTime() {

  const widthwindow = useGetWindowWidth()
  return (
    <div className={cls.FlyTime}>
      <div className={cls.FlyTime__back}>
        <Container >
        <h2 className={cls.FlyTime__title}>Ближайшие рейс через:</h2>
        {widthwindow <1540? <h3 className={cls.FlyTime__time}> 18:00:00</h3>:""} 
              <div className={cls.FlyTime__wrap}>
                  <div className={cls.FlyTime__card}>
                      <h3 className={cls.FlyTime__card__title}>Китай, Йиву</h3>
                        <p className={cls.FlyTime__card__text}>Местоположение склада</p>
                  </div>      
                 {widthwindow >1540? <h3 className={cls.FlyTime__time}> 18:00:00</h3>:""}   
                <div className={cls.FlyTime__card}>
                      <h3 className={cls.FlyTime__card__title}>Узбекистан, Ташкент</h3>
                        <p className={cls.FlyTime__card__text}>Местоположение склада</p>
                  </div>  
          </div>
          
         
        </Container>
        <div className={cls.FlyTime__Images}>
              <img src="/images/image9.png" alt="img" />
              <img src="/images/image10.png" alt="img" />
          </div>
      </div>
  </div>
  )
}
